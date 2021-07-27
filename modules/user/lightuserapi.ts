import { PamCache } from 'pampu';
import LightUser from './lightuser';
import UserRepo from './userrepo';
import { UserId } from './user';
import { lightUserBsonHandler } from './bson';

export default class LightUserApi {

  constructor(readonly repo: UserRepo) {
  }

  cache: PamCache<UserId, Promise<Maybe<LightUser>>> = new PamCache<UserId, Promise<Maybe<LightUser>>>({
    size: 100,
    loader: id => this.repo.findProjection<LightUser>(id, {
      username: true
    }, lightUserBsonHandler)
  });


  get(id: UserId): Fu<Maybe<LightUser>> {
    return this.cache.get(id);
  }
  
  
}
