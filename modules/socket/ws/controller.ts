import { ClientEmit } from './types';
import Auth from './auth';
import WsClient from './client';
import MatchmakerClient from './matchmakerclient';
import RoundClient from './roundclient';
import { ChestInHandler } from './chestin';
import { ChestOutHandler } from './chestout';
import { UserWithSession } from '../../security/session';
import { SocketVersion } from '../socket';
import { Services } from './services';
import { GameFullId } from './model';
import { State as RoomActorState } from './roomclient';

export default class Controller {

  static make = (auth: Auth,
                 chestIn: ChestInHandler,
                 services: Services) =>
    new Controller(auth,
                   chestIn,
                   services);

  constructor(readonly auth: Auth,
              readonly chestIn: ChestInHandler,
              readonly services: Services) {
    
  }

  roundPlay(req: any, id: GameFullId, emit: ClientEmit, onStop: () => void) {
    return this.WebSocket(req)((sri, user) => {
      return RoundClient.make(
        RoomActorState.make(id.gameId),
        this.chestIn,
        emit,
        this.services,
        req,
        onStop,
        sri,
        user);
    });
  }
  
  matchmaker(req: any, id: string, emit: ClientEmit, onStop: () => void) {
    return this.WebSocket(req)((sri, user) => {
      return MatchmakerClient.make(this.chestIn,
                                   emit,
                                   this.services,
                                   req,
                                   onStop,
                                   sri,
                                   user);
    });
  }
  
  WebSocket(req: any) {
    return async (op: (sri: string, muser: Maybe<UserWithSession>) => WsClient) => {
      let sri = this.ValidSri(req);
      if (sri) {
        let user = await this.auth.apply(req);
        return op(sri, user);
      }      
    };
  }

  ValidSri(req: any) {
    let [_, params] = decodeURIComponent(req.url).split('?');
    if (params) {

      let sri = params.split('&')
        .map(_ => _.split('='))
        .find(_ => _[0] === 'sri')

      if (sri && sri[1].length <= 12) {
        return sri[1];
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
