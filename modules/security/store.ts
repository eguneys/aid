import { Coll } from '../db';
import { kba } from 'koob';

export default class Store {

  coll: Coll<any>
  
  constructor(coll: Coll<any>) {
    this.coll = coll;
  }

  saveAnon(sessionId: kba.SessionId) {
    return this.coll.insert({
      id: sessionId,
      date: Date.now()
    });
  }

  authInfo(sessionId: kba.SessionId) {
    return this.coll.one({id: sessionId})
      .then(_ => _?.user);
  }
  
}
