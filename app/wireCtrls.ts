import { default as EnvBoot, Env } from './env';
import * as c from './ctrls';

export default class wireCtrls {

  env: Env
  site: c.Site
  book: c.Book

  constructor(_: EnvBoot) {

    this.env = _.env;

    this.site = new c.Site(this.env);
    this.book = new c.Book(this.env);
    

  }
  
}
