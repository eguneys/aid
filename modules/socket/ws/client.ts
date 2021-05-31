import * as cout from './clientout';
import * as cin from './clientin';
import { ClientEmit } from './types';
import { UserWithSession } from '../../security/session';
import { Who } from './actorApi';

export default class WsClient {

  readonly who: Maybe<Who>
  
  constructor(readonly clientIn: ClientEmit,
              sri: string,
              user: Maybe<UserWithSession>) {

    if (user) {
      this.who = Who.make(user, sri);
    }
    
  }
  
  out(msg: any) {
    if (cout.isPing(msg)) {
      this.clientIn(cin.Pong);
    } else if (cout.isUnexpected(msg)) {
      console.warn('Unexpected: ', msg);
    }
  }
  
}
