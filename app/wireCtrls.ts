import { default as EnvBoot, Env, EnvAwait } from './env';
import * as c from './ctrls';

export default class wireCtrls {

  env: Env
  envAwait: EnvAwait
  auth: c.Auth
  site: c.Site
  matchmaker: c.Matchmaker
  round: c.Round

  constructor(_: EnvBoot) {

    this.env = _.env;
    this.envAwait = _.envAwait;

    this.site = new c.Site(this.env);
    this.auth = new c.Auth(this.env,
                           this.envAwait);

    this.matchmaker = new c.Matchmaker(this.env);

    this.round = new c.Round(this.env);

  }
  
}
