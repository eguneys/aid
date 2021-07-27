import * as chest from '../';
import UserRepo from './userrepo';
import UserApi from './userapi';
import LightUserApi from './lightuserapi';
import * as bson from './bson';
import User from './user';

export class Env {

  repo: UserRepo
  db: chest.db.Db
  api: UserApi
  lightUserApi: LightUserApi
  
  constructor(db: chest.db.Db) {
    this.db = db;

    this.repo = new UserRepo(db.apply<User>('user', bson.UserBsonHandler));

    this.api = new UserApi(this.repo);

    this.lightUserApi = new LightUserApi(this.repo);
  }

  
  
}
