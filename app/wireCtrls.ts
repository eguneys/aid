import { default as EnvBoot, Env } from './env';
import * as c from './ctrls';

export default class wireCtrls {

  env: Env
  site: c.Site
  book: c.Book
  auth: c.Auth

  constructor(_: EnvBoot) {

    this.env = _.env;

    this.site = new c.Site(this.env);
    this.book = new c.Book(this.env);
    this.auth = new c.Auth(this.env);
    

  }
  
}
