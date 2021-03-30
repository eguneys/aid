import { default as EnvBoot, Env } from './env';
import * as c from './ctrls';

export default class wireCtrls {

  env: Env
  site: c.Site

  constructor(_: EnvBoot) {

    this.env = _.env;

    this.site = new c.Site(this.env);
    

  }
  
}
