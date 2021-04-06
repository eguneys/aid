import { default as EnvBoot, Env } from './env';
import * as c from './ctrls';

export default class wireCtrls {

  env: Env
  site: c.Site
  book: c.Book
  auth: c.Auth
  repertoire: c.Repertoire

  constructor(_: EnvBoot) {

    this.env = _.env;

    this.site = new c.Site(this.env);
    this.book = new c.Book(this.env);
    this.auth = new c.Auth(this.env);
    this.repertoire = new c.Repertoire(this.env);    

  }
  
}
