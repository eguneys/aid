import * as chest from '../';
import WebSocket from 'ws';
import Controller from './ws/controller';
import WsClient from './ws/client';
import Auth from './ws/auth';
import * as cout from './ws/clientout';
import { ClientIn } from './ws/clientin';
import { ClientEmit } from './ws/types';
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
      let clientFu: Fu<Maybe<WsClient>> = this.router(req, emit)

      ws.on('message', (txt: string) => {
        let msg = cout.parse(txt)
        if (msg) {
          clientFu.then(_ => {
            if (_) {
              _.out(msg!)
            } else {
              ws.terminate();
            }
          });
        }
      });

      ws.on('close', () => {
        
      });
      
    });
    
  }

  router(req: any, emit: ClientEmit) {
    let [url, params] = req.url.split('?');
    let [_, path, id, socket] = url.split('/');

    if (path === 'matchmaker' && socket === 'socket') {
      return this.controller.matchmaker(req, id, emit);
    }

    return Promise.resolve(undefined);
    
  }
  
  subscribe(channel: string, handler: OutHandler) {
    return this.chestIn.subscribe(channel, handler);
  }

  publish(channel: string, message: ChestOut) {
    return this.chestOut.publish(channel, message);
  }
  
}
