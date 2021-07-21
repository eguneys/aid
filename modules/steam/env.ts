import { Auth } from './auth';
import Configuration from '../../app/config';
import LateConfigEnv from '../../app/lateconfig';

export class Env {

  auth: Auth
  
  constructor(config: Configuration,
              lateConfig: LateConfigEnv) {

    this.auth = new Auth(
      `${config.net.protocol + config.net.domain}/steam/callback`,
      `${config.net.protocol + config.net.domain}`,
      lateConfig.config.steamApiKey
    )
    
  }
  
}
