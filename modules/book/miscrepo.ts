import { kbt, kbte, kba } from 'koob';
import { Coll } from '../db/coll';
import { nextString } from '../common';


export class MiscRepo {

  coll: Coll<kbte.SessionLastContent>

  constructor(coll: Coll<kbte.SessionLastContent>) {
    this.coll = coll;
  }

  async insert(slc: kbte.SessionLastContent) {
    return this.coll.insert(slc)
  }

  async get(sessionId: kba.SessionId) {
    return this.coll.one({ id: sessionId });
  }

  async upsert(sessionId: kba.SessionId,
               lastContent: kbt.ContentId) {
    return this.coll.set(sessionId,
                         { id: sessionId,
                           lastContent });
  }
  
}
