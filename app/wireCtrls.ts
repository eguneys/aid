import { default as EnvBoot, Env, EnvAwait } from './env';
import * as c from './ctrls';

export default class wireCtrls {

  env: Env
  envAwait: EnvAwait
  auth: c.Auth
  site: c.Site
  opening: c.Opening

  constructor(_: EnvBoot) {

    this.env = _.env;
    this.envAwait = _.envAwait;

    this.site = new c.Site(this.env);
    this.auth = new c.Auth(this.env,
                           this.envAwait);

    this.opening = new c.Opening(this.env,
      this.envAwait)

  }
  
}
