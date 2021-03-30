import { env as helperEnv } from './views/helper';
import { NetConfig } from '../modules/common';
import Configuration from './config';
import * as chest from '../modules';

export class Env {

  net: NetConfig
  book: chest.book.Env
  
  constructor(net: NetConfig,
              book: chest.book.Env) {
    this.net = net;
    this.book = book;
  }

}

export default class EnvBoot {

  env: Env

  constructor(config: Configuration) {

    let db = new chest.db.Env(config);
    let book = new chest.book.Env(db);

    this.env = new Env(config.net,
                       book);

    helperEnv.setEnv(this.env);
  }


  async awaitVariables() {
    
  }
}
