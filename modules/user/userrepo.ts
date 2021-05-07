import { nextString } from '../common';
import { Coll } from '../db';
import { LiAuth } from '../lila/auth';
import User, { UserId } from './user';
import LiUser from './liuser';

export default class UserRepo {

  liColl: Coll<LiUser>
  coll: Coll<User>
  
  constructor(coll: Coll<User>,
              liColl: Coll<LiUser>) {
    this.coll = coll;
    this.liColl = liColl;
  }

  createUserFromLichess(liauth: LiAuth) {
    let user = User.make({
      id: nextString(8),
      username: liauth.username
    });

  let liuser = LiUser.make({
      id: user.id,
      userId: user.id,
      auth: liauth
  });
    
    return this.insert(user)
      .then(() => this.liColl.insert(liuser))
      .then(() => user);
  }
  
  insert(user: User) {
    return this.coll.insert(user);
  }

  byId(id: UserId) {
    return this.coll.one({id});
  }

  byUsername(username: string) {
    return this.coll.one({username});
  }
  
}
