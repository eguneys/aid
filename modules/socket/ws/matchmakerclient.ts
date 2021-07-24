import WsClient from './client';
import { ClientEmit, Broom } from './types';
import { UserWithSession } from '../../security/session';
import * as cout from './clientout';
import * as cin from './clientin';
import * as chIn from './chestin';
import * as chOut from './chestout';
import RoomClient from './roomclient';
import { SocketVersion } from '../socket';
import Bus from './bus';
import { Services } from './services';

export default class MatchmakerClient extends WsClient {

  static make = (chestIn: chIn.ChestInHandler,
                 clientIn: ClientEmit,
                 services: Services,
                 req: any,
                 onStop: () => void,
                 sri: string,
                 user: Maybe<UserWithSession>) =>
    new MatchmakerClient(chestIn,
                         clientIn,
                         services,
                         onStop,
                         sri,
                         user);

  constructor(
    chestIn: chIn.ChestInHandler,
    clientIn: ClientEmit,
    services: Services,
    onStop: () => void,
    sri: string,
    user: Maybe<UserWithSession>) {

    super(chestIn,
          clientIn,
          services,
          onStop,
          sri,
          user);

    if (this.who) {
      this.services.matchmaker.connect.apply(this.who);
    }
    Bus.subscribe('matchmaker', this._in);
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

  _in = (_: cin.ClientMsg) => {
    if (cin.isPayload(_)) {
      this.clientIn(_)
    }

    if (Broom.isBroom(_)) {
      super.broom(_.oldSeconds); 
    }    
  }

  _all = (_: cin.ClientMsg) => {
    super._all(_);
  }

  onStop() {
    super.onStop();
    Bus.unsubscribe('matchmaker', this._in);
    this.services.matchmaker.disconnect.apply(this.sri);
  }
  
}
