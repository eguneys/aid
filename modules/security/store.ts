import { Coll } from '../db';
import { kba, kbu } from 'koob';

export default class Store {

  coll: Coll<kba.Session>
  
  constructor(coll: Coll<kba.Session>) {
    this.coll = coll;
  }

  save(sessionId: kba.SessionId, userId: kbu.UserId) {
    return this.coll.insert({
      id: sessionId,
      date: Date.now(),
      userId
    });
  }
  
  saveAnon(sessionId: kba.SessionId) {
    return this.coll.insert({
      id: sessionId,
      date: Date.now()
    });
  }

  authInfo(sessionId: kba.SessionId) {
    return this.coll.one({id: sessionId})
      .then(_ => _?.userId);
  }
  
}
