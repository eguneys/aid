import * as chest from '../';
import WebSocket from 'ws';
import Controller from './ws/controller';
import WsClient from './ws/client';
import Auth from './ws/auth';
import * as cout from './ws/clientout';
import { ClientIn } from './ws/clientin';
import { ClientEmit, Broom } from './ws/types';
import { ChestInHandler, OutHandler } from './ws/chestin';
import { chestOut2ClientIn, ChestOutHandler, ChestOut } from './ws/chestout';
import Bus from './ws/bus';
import Matchmaker from './ws/matchmaker';
import { Services } from './ws/services';

export default class WebSocketPubSub {

  services: Services;
  
  matchmaker: Matchmaker;
  controller: Controller;

  chestIn: ChestInHandler;
  chestOut: ChestOutHandler;

  constructor(securityApi: chest.security.SecurityApi) {

    let auth = new Auth(securityApi);

    this.chestIn = ChestInHandler.make();
    this.chestOut = ChestOutHandler.make();

    this.matchmaker = Matchmaker.make(this.chestIn);

    this.services = Services.make(this.matchmaker);
    
    this.controller = Controller.make(auth,
                                      this.chestIn,
                                      this.services);


    chestOut2ClientIn(this.chestOut);


    setInterval(() => {
      Bus.publish('matchmaker', Broom.make(Date.now() - 10 * 1000))
    }, 10 * 1000);
  }
  
  initServer(server: any) {
    let wss = new WebSocket.Server({ server });

    wss.on('connection', (ws: any, req: any, _client: any) => {

      let emit = (msg: ClientIn) => {
        ws.send(msg.write);
      };
      let clientFu: Fu<Maybe<WsClient>> = this.router(req, emit, () => {
        ws.terminate();
      })

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
        clientFu.then(_ => _?.onStop());
      });
      
    });
    
  }

  router(req: any, emit: ClientEmit, onStop: () => void) {
    let [url, params] = req.url.split('?');
    let [_, path, id, socket] = url.split('/');

    if (path === 'matchmaker' && socket === 'socket') {
      return this.controller.matchmaker(req, id, emit, onStop);
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
