import { Auth } from './auth';
import { Study } from './study'
import Configuration from '../../app/config';
import LateConfigEnv from '../../app/lateconfig';

export class Env {

  auth: Auth
  study: Study
  
  constructor(config: Configuration,
              lateConfig: LateConfigEnv) {

    let { lila_oauth: { client_id, client_secret } } = lateConfig.config;

    this.auth = new Auth(`${config.net.protocol + config.net.domain}/lila/callback`,
                         client_id,
                         client_secret);


    this.study = new Study()
    
  }
  
}
