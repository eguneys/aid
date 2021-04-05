import { env as helperEnv } from './views/helper';
import { NetConfig } from '../modules/common';
import Configuration from './config';
import * as chest from '../modules';

export class Env {

  net: NetConfig
  book: chest.book.Env
  api: chest.api.Env
  security: chest.security.Env
  
  constructor(net: NetConfig,
              api: chest.api.Env,
              book: chest.book.Env,
              security: chest.security.Env) {
    this.net = net;
    this.api = api;
    this.book = book;
    this.security = security;
  }

}

export default class EnvBoot {

  env: Env

  constructor(config: Configuration) {

    let mongo = new chest.db.Env(config);
    let mainDb = mongo.db('main');

    let user = new chest.user.Env(mainDb);
    let book = new chest.book.Env(mongo);
    let security = new chest.security.Env(
      user.repo,
      mainDb);
    let api = new chest.api.Env(book);


    this.env = new Env(config.net,
                       api,
                       book,
                       security);

    helperEnv.setEnv(this.env);
  }


  async awaitVariables() {
    
  }
}
