import config from '../conf/prod';
import Configuration from './config';
import * as chest from '../modules';
import { Coll } from '../modules/db';

export type LateConfig = {
  project: string,
  cookie_secret: string,
  lila_oauth: {
    client_id: string,
    client_secret: string
  }
}

export default class LateConfigEnv {

  coll: Coll<LateConfig>

  project: string
  config!: LateConfig

  constructor(config: Configuration,
              db: chest.db.Db) {

    this.project = config.net.project;
    this.coll = db.apply('env');
    
  }

  async awaitConfig() {
    return this.coll
      .one({})
      .then(_ => {
        if (_) {
          this.config = _;
        } else {
          return this.createConfig().then(_ => {
            this.config = _;
          });
        }
      });
  }

  async createConfig() {
    return this.coll.insert(config)
      .then(_ => config);
  }
  
}
