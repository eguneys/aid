import * as chest from '../';
import WebSocket from 'ws';
import Controller from './ws/controller';
import WsClient from './ws/client';
import Auth from './ws/auth';
import * as cout from './ws/clientout';
import { ClientIn } from './ws/clientin';
import { ChestInHandler, OutHandler } from './ws/chestin';
import { chestOut2ClientIn, ChestOutHandler, ChestOut } from './ws/chestout';

export default class WebSocketPubSub {

  controller: Controller;

  chestIn: ChestInHandler;
  chestOut: ChestOutHandler;

  constructor(securityApi: chest.security.SecurityApi) {

    let auth = new Auth(securityApi);

    this.chestIn = ChestInHandler.make();
    this.chestOut = ChestOutHandler.make();
    
    this.controller = Controller.make(auth,
                                      this.chestIn);

    chestOut2ClientIn(this.chestOut);
  }
  
  initServer(server: any) {
    let wss = new WebSocket.Server({ server });

    wss.on('connection', async (ws: any, req: any, _client: any) => {

      let emit = (msg: ClientIn) => ws.send(msg.write);
      let clientFu: Fu<Maybe<WsClient>> = Promise.resolve(undefined);
      
      //console.log(req.headers.cookie);
      let [url, params] = req.url.split('?');
      let [_, path, id, socket] = url.split('/');

      // if (path === 'study' &&
      //   socket === 'socket') {
      //   clientFu = this.controller.study(req, id, emit);
      // }

      ws.on('message', (txt: string) => {
        let msg = cout.parse(txt)
        if (msg) {
          clientFu.then(_ => _?.out(msg!));
        }
      });

      ws.on('close', () => {
        
      });
      
    });
    
  }
  
  subscribe(channel: string, handler: OutHandler) {
    return this.chestIn.subscribe(channel, handler);
  }

  publish(channel: string, message: ChestOut) {
    return this.chestOut.publish(channel, message);
  }
  
}
