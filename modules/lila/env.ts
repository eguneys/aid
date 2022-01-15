import { Auth } from './auth';
import { Study } from './study'
import { Games } from './games'
import Configuration from '../../app/config';
import LateConfigEnv from '../../app/lateconfig';

export class Env {

  auth: Auth
  study: Study
  games: Games
  
  constructor(config: Configuration,
              lateConfig: LateConfigEnv) {

    let { lila_oauth: { client_id, client_secret } } = lateConfig.config;

    this.auth = new Auth(`${config.net.protocol + config.net.domain}/lila/callback`,
                         client_id,
                         client_secret);


    this.study = new Study()

    this.games = new Games()
    
  }
  
}
