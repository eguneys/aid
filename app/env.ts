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
    readonly security: chest.security.Env) {
  }

}

export class EnvAwait {

  constructor(readonly config: LateConfigEnv,
    readonly lila: chest.lila.Env,
    readonly opening: chest.opening.Env) {
  }
}

export default class EnvBoot {

  readonly config: Configuration
  readonly mongo: chest.db.Env
  readonly env: Env
  envAwait!: EnvAwait
  readonly mainDb: chest.db.Db
  
  constructor(config: Configuration) {

    this.config = config;
    this.mongo = new chest.db.Env(config);
    this.mainDb = this.mongo.db('main');

    let user = new chest.user.Env(this.mainDb);
    let security = new chest.security.Env(
      user.repo,
      this.mainDb);
    let socket = new chest.socket.Env(
      security.api,
      user.lightUserApi
    );
    let api = new chest.api.Env();

    let game = new chest.game.Env(this.mainDb);


    this.env = new Env(config.net,
                       api,
                       user,
                       socket,
                       security);

    helperEnv.setEnv(this.env);
  }


  async awaitVariables() {

    let envDb = this.mongo.db('env');

    let lateConfig = new LateConfigEnv(this.config,
                                       envDb);

    await lateConfig.awaitConfig()

    let lila = new chest.lila.Env(this.config,
      lateConfig)

    let opening = new chest.opening.Env(this.mainDb, lila);

    this.envAwait = new EnvAwait(lateConfig,
      lila,
      opening
     );
    
  }
}
