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


  updateGamesSince(id: UserId, games_since: number) {
    return this.coll.updateById(id, { games_since })
  }

  createUserFromLiAuth(profile: LiAuth) {
    let user = User.make({
      id: nextString(8),
      username: profile.username,
      litoken: profile.token,
      games_since: Date.now()
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

  findProjection<A>(id: UserId, projection: any, bson: BSON<A>): Fu<Maybe<A>> {
    return this.coll.findProjection({id}, projection, bson).then(_ => _[0]);
  }

  byUsername(username: string) {
    return this.coll.one({username});
  }
  
}
