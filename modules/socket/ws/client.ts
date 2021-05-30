import * as cout from './clientout';
import * as cin from './clientin';
import { ClientEmit } from './types';

export default class WsClient {

  constructor(readonly clientIn: ClientEmit) {
    
  }
  
  out(msg: any) {
    if (cout.isPing(msg)) {
      this.clientIn(cin.Pong);
    } else if (cout.isUnexpected(msg)) {
      console.warn('Unexpected: ', msg);
    }
  }
  
}
