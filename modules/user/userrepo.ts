import { nextString } from '../common';
import { kbu } from 'koob';
import { Coll } from '../db';
import { LiAuth } from '../lila/auth';
import { LiUser } from './user';

export default class UserRepo {

  liColl: Coll<LiUser>
  coll: Coll<kbu.User>
  
  constructor(coll: Coll<kbu.User>,
              liColl: Coll<LiUser>) {
    this.coll = coll;
    this.liColl = liColl;
  }

  createUserFromLichess(liauth: LiAuth) {
    let user = {
      id: nextString(8),
      username: liauth.username
    };

    let liuser = {
      id: user.id,
      userId: user.id,
      auth: liauth
    }
    
    return this.insert(user)
      .then(() => this.liColl.insert(liuser))
      .then(() => user);
  }
  
  insert(user: kbu.User) {
    return this.coll.insert(user);
  }

  byId(id: kbu.UserId) {
    return this.coll.one({id});
  }
  
}
