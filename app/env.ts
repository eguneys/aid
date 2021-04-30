import { env as helperEnv } from './views/helper';
import LateConfigEnv, { LateConfig } from './lateconfig';
import { NetConfig } from '../modules/common';
import Configuration from './config';
import * as chest from '../modules';

export class Env {

  net: NetConfig
  api: chest.api.Env
  user: chest.user.Env
  security: chest.security.Env
  
  constructor(net: NetConfig,
              api: chest.api.Env,
              user: chest.user.Env,
              security: chest.security.Env) {
    this.net = net;
    this.api = api;
    this.user = user;
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
    let security = new chest.security.Env(
      user.repo,
      mainDb);
    let api = new chest.api.Env();


    this.env = new Env(config.net,
                       api,
                       user,
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
