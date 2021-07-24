import * as cout from './clientout';
import * as cin from './clientin';
import Bus, { _all, _sri } from './bus';
import { ClientEmit } from './types';
import { UserWithSession } from '../../security/session';
import { Who } from './actorApi';
import { ChestInHandler } from './chestin';
import { ChestOutHandler } from './chestout';
import { ClientOut } from './clientout';
import { ClientIn, ClientMsg } from './clientin';
import { Services } from './services';

export default abstract class WsClient {

  readonly who: Maybe<Who>

  lastPing: number = Date.now();
  
  constructor(readonly chestIn: ChestInHandler,
              readonly clientIn: ClientEmit,
              readonly services: Services,
              readonly _onStop: () => void,
              readonly sri: string,
              readonly user: Maybe<UserWithSession>) {

    if (user) {
      this.who = Who.make(user, sri);
    }

    Bus.subscribe(_all, this._all);
    Bus.subscribe(_sri(sri), this._sri);
    
  }
  
  out(msg: ClientOut) {
    if (cout.isPing(msg)) {
      this.clientIn(cin.PongIn.Pong);
      this.sitePing();
    } else if (cout.isUnexpected(msg)) {
      console.warn('Unexpected: ', msg);
    }
  }

  sitePing() {
    this.lastPing = Date.now();
  }


  broom(oldSeconds: number) {
    if (this.lastPing < oldSeconds) {
      console.warn('timed out', this.sri);
      this._onStop();
    }
  }

  _all = (_: ClientMsg) => {
  }

  _sri = (_: ClientMsg) => {
    if (ClientIn.isClientIn(_)) {
      this.clientIn(_);
    }
  }

  onStop() {
    Bus.unsubscribe(_all, this._all);
    Bus.unsubscribe(_sri(this.sri), this._sri);
  }
}
