import * as cout from './clientout';
import * as cin from './clientin';
import { ClientEmit } from './types';
import { UserWithSession } from '../../security/session';
import { Who } from './actorApi';
import { ChestInHandler } from './chestin';
import { ChestOutHandler } from './chestout';
import { ClientOut } from './clientout';
import { ClientIn } from './clientin';

export default abstract class WsClient {

  readonly who: Maybe<Who>
  
  constructor(readonly chestIn: ChestInHandler,
              readonly clientIn: ClientEmit,
              sri: string,
              user: Maybe<UserWithSession>) {

    if (user) {
      this.who = Who.make(user, sri);
    }
    
  }
  
  out(msg: ClientOut) {
    if (cout.isPing(msg)) {
      this.clientIn(cin.Pong);
    } else if (cout.isUnexpected(msg)) {
      console.warn('Unexpected: ', msg);
    }
  }
}
