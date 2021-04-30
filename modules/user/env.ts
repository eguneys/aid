import * as chest from '../';
import UserRepo from './userrepo';
import UserApi from './userapi';
import * as bson from './bson';
import User from './user';
import LiUser from './liuser';

export class Env {

  repo: UserRepo
  db: chest.db.Db
  api: UserApi
  
  constructor(db: chest.db.Db) {
    this.db = db;

    this.repo = new UserRepo(db.apply<User>('user', bson.UserBsonHandler),
                             db.apply<LiUser>('liauth', bson.LiUserBsonHandler));

    this.api = new UserApi(this.repo);
  }

  
  
}
