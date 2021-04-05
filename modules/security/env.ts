import * as chest from '../';
import { UserRepo } from '../user';
import Store from './store';
import SecurityApi from './securityapi';

export class Env {

  store: Store
  api: SecurityApi

  constructor(userRepo: UserRepo,
              db: chest.db.Db) {

    this.store = new Store(db.apply('security'));
    
    this.api = new SecurityApi(userRepo,
                               this.store);
    
  }
  
}
