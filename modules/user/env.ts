import * as chest from '../';
import UserRepo from './userrepo';
import UserApi from './userapi';

export class Env {

  repo: UserRepo
  db: chest.db.Db
  api: UserApi
  
  constructor(db: chest.db.Db) {
    this.db = db;

    this.repo = new UserRepo(db.apply('user'),
                             db.apply('liauth'));

    this.api = new UserApi(this.repo);
  }

  
  
}
