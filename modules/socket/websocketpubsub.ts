import * as chest from '../';
import WebSocket from 'ws';
import Controller from './ws/controller';
import WsClient from './ws/client';
import Auth from './ws/auth';
import * as cout from './ws/clientout';
import { ClientIn } from './ws/clientin';
import { ChestIn } from './ws/chestin';
import { ChestOut, OutHandler } from './ws/chestout';

export default class WebSocketPubSub {

  controller: Controller;

  chestIn: ChestIn;
  chestOut: ChestOut;

  constructor(securityApi: chest.security.SecurityApi) {

    let auth = new Auth(securityApi);
    
    this.controller = Controller.make(auth);

    this.chestIn = ChestIn.make();
    this.chestOut = ChestOut.make();
  }
  
  initServer(server: any) {
    let wss = new WebSocket.Server({ server });

    wss.on('connection', async (ws: any, req: any, _client: any) => {

      let emit = (msg: ClientIn) => ws.send(msg.write);
      let clientFu: Fu<Maybe<WsClient>> = Promise.resolve(undefined);
      
      //console.log(req.headers.cookie);
      let [url, params] = req.url.split('?');
      let [_, path, id, socket] = url.split('/');
      if (path === 'study' &&
        socket === 'socket') {
        clientFu = this.controller.study(req, id, emit);
      }

      ws.on('message', (msg: string) => {
        clientFu.then(_ => _?.out(cout.parse(msg)));
      });

      ws.on('close', () => {
        
      });
      
    });
    
  }
  
  subscribe(channel: string, handler: OutHandler) {
    return this.chestOut.subscribe(channel, handler);
  }

  publish(channel: string, message: string) {
    return this.chestIn.publish(channel, message);
  }
  
}
