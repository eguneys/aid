import { env as helperEnv } from './views/helper';
import LateConfigEnv, { LateConfig } from './lateconfig';
import { NetConfig } from '../modules/common';
import Configuration from './config';
import * as chest from '../modules';

export class Env {
  
  constructor(readonly net: NetConfig,
              readonly api: chest.api.Env,
              readonly user: chest.user.Env,
              readonly socket: chest.socket.Env,
              readonly security: chest.security.Env,
              readonly pool: chest.pool.Env,
              readonly matchmaker: chest.matchmaker.Env) {
  }

}

export class EnvAwait {

  constructor(readonly config: LateConfigEnv,
              readonly steam: chest.steam.Env) {
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
    let socket = new chest.socket.Env(
      security.api
    );
    let api = new chest.api.Env();


    let pool = new chest.pool.Env(user.repo);

    let matchmaker = new chest.matchmaker.Env(mainDb,
                                              socket.remoteSocket);

    this.env = new Env(config.net,
                       api,
                       user,
                       socket,
                       security,
                       pool,
                       matchmaker);

    helperEnv.setEnv(this.env);
  }


  async awaitVariables() {

    let envDb = this.mongo.db('env');

    let lateConfig = new LateConfigEnv(this.config,
                                       envDb);

    await lateConfig.awaitConfig()

    let steam = new chest.steam.Env(this.config,
                                    lateConfig);

    this.envAwait = new EnvAwait(lateConfig,
                                 steam);
    
  }
}
