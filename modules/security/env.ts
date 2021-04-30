import * as chest from '../';
import { UserRepo } from '../user';
import Store from './store';
import SecurityApi from './securityapi';
import * as bson from './bson';
import Session from './session';

export class Env {

  store: Store
  api: SecurityApi

  constructor(userRepo: UserRepo,
              db: chest.db.Db) {

    this.store = new Store(db.apply<Session>('security', bson.SessionBSONHandler));
    
    this.api = new SecurityApi(userRepo,
                               this.store);
    
  }
  
}
