import { kbu } from 'koob';
import { Coll } from '../db';

export default class UserRepo {

  coll: Coll<kbu.User>
  
  constructor(coll: Coll<kbu.User>) {
    this.coll = coll;
  }

  byId(id: kbu.UserId) {
    return this.coll.one({id});
  }
  
}
