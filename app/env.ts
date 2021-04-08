import { env as helperEnv } from './views/helper';
import LateConfigEnv, { LateConfig } from './lateconfig';
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

export class EnvAwait {

  config: LateConfigEnv
  lila: chest.lila.Env
  
  constructor(config: LateConfigEnv,
              lila: chest.lila.Env) {

    this.config = config;
    this.lila = lila;
    
  }
}

export default class EnvBoot {

  config: Configuration
  mongo: chest.db.Env
  env: Env
  envAwait!: EnvAwait
  
  constructor(config: Configuration) {

    this.config = config;
    this.mongo = new chest.db.Env(config);
    let mainDb = this.mongo.db('main');

    let user = new chest.user.Env(mainDb);
    let book = new chest.book.Env(this.mongo);
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

    let envDb = this.mongo.db('env');

    let lateConfig = new LateConfigEnv(this.config,
                                       envDb);

    await lateConfig.awaitConfig()

    let lila = new chest.lila.Env(this.config,
                                  lateConfig);

    this.envAwait = new EnvAwait(lateConfig,
                                 lila);
    
  }
}
