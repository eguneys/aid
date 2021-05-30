import { Coll } from '../db';
import Session, { SessionId } from './session';
import { UserId } from '../user/user';

export default class Store {

  coll: Coll<Session>
  
  constructor(coll: Coll<Session>) {
    this.coll = coll;
  }

  save(sessionId: SessionId, userId: UserId) {
    return this.coll.insert(Session.make({
      id: sessionId,
      createdAt: Date.now(),
      userId
    }));
  }
  
  saveAnon(sessionId: SessionId) {
    return this.coll.insert(Session.make({
      id: sessionId,
      createdAt: Date.now()
    }));
  }

  sessionInfo(sessionId: SessionId) {
    return this.coll.one({id: sessionId});
  }
  
  authInfo(sessionId: SessionId) {
    return this.coll.one({id: sessionId})
      .then(_ => _?.userId);
  }
  
}
