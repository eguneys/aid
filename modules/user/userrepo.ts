import { nextString } from '../common';
import { Coll } from '../db';
import { LiAuth } from '../lila/auth';
import User, { UserId } from './user';
import { BSON } from '../db/bson';

export default class UserRepo {

  coll: Coll<User>
  
  constructor(coll: Coll<User>) {
    this.coll = coll;
  }

  createUserFromLiAuth(profile: LiAuth) {
    let user = User.make({
      id: nextString(8),
      username: profile.username
    });

    return this.insert(user)
      .then(() => user);
  }
  
  insert(user: User) {
    return this.coll.insert(user);
  }

  byId(id: UserId) {
    return this.coll.one({id});
  }

  // abstract findProjection<B>(query: any, projection: any, bson: BSON<B>): Fu<Array<B>>
  findProjection<A>(id: UserId, projection: any, bson: BSON<A>): Fu<Maybe<A>> {
    return this.coll.findProjection({id}, projection, bson).then(_ => _[0]);
  }

  byUsername(username: string) {
    return this.coll.one({username});
  }
  
}
