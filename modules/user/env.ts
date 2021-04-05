import * as chest from '../';
import UserRepo from './userrepo';

export class Env {

  repo: UserRepo
  db: chest.db.Db
  
  constructor(db: chest.db.Db) {
    this.db = db;

    this.repo = new UserRepo(db.apply('user'));
  }

  
  
}
