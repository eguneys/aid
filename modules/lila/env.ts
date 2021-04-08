import { Auth } from './auth';
import Configuration from '../../app/config';
import LateConfigEnv from '../../app/lateconfig';

export class Env {

  auth: Auth
  
  constructor(config: Configuration,
              lateConfig: LateConfigEnv) {

    let { lila_oauth: { client_id, client_secret } } = lateConfig.config;
    
    this.auth = new Auth(`${config.net.domain}/callback`,
                         client_id,
                         client_secret);
    
  }
  
}
