import { ClientEmit } from './types';
import Auth from './auth';
import RoomClient from './roomclient';
import { ChestInHandler } from './chestin';
import { ChestOutHandler } from './chestout';
import { UserWithSession } from '../../security/session';
import { SocketVersion } from '../socket';

export default class Controller {

  static make = (auth: Auth,
                 chestIn: ChestInHandler) =>
    new Controller(auth,
                   chestIn);

  constructor(readonly auth: Auth,
              readonly chestIn: ChestInHandler) {
    
  }
  
  WebSocket(req: any) {
    return async (op: (sri: string, muser: Maybe<UserWithSession>) => RoomClient) => {
      let sri = this.ValidSri(req);
      if (sri) {
        let user = await this.auth.apply(req);
        return op(sri, user);
      }      
    };
  }

  ValidSri(req: any) {
    let [_, params] = req.url.split('?');
    if (params) {
      let match = params.match(/sri=([a-zA-Z0-9]*)/);

      if (match) {
        let sri = match[1];
        return sri;
      }
    }
  }

  fromVersion(req: any): Maybe<SocketVersion> {
    let [_, params] = req.url.split('?');
    if (params) {
      let match = params.match(/v=(0-9*)/);

      if (match) {
        let sri = match[1];
        return SocketVersion.make(parseInt(sri));
      }
    }    
  }
  
}
