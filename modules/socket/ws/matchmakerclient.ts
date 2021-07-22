import WsClient from './client';
import { ClientEmit } from './types';
import { UserWithSession } from '../../security/session';
import * as cout from './clientout';
import * as cin from './clientin';
import * as chIn from './chestin';
import * as chOut from './chestout';
import RoomClient from './roomclient';
import { SocketVersion } from '../socket';

export default class MatchmakerClient extends WsClient {

  static make = (chestIn: chIn.ChestInHandler,
                 clientIn: ClientEmit,
                 req: any,
                 sri: string,
                 user: Maybe<UserWithSession>) =>
    new MatchmakerClient(chestIn,
                         clientIn,
                         sri,
                         user);

  constructor(
    chestIn: chIn.ChestInHandler,
    clientIn: ClientEmit,
    sri: string,
    user: Maybe<UserWithSession>) {

    super(chestIn,
          clientIn,
          sri,
          user);
  }

  forward(payload: any) {
    this.chestIn.matchmaker(chIn.tellSri(this.who, payload));
  }

  out(msg: cout.ClientOut) {
    if (cout.isMForward(msg)) {
      this.forward(msg.payload);
    } else {
      super.out(msg);
    }
  };
  
}
