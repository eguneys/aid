import { default as EnvBoot, Env } from './env';
import * as c from './ctrls';

export default class wireCtrls {

  env: Env
  auth: c.Auth
  site: c.Site
  book: c.Book
  content: c.Content
  repertoire: c.Repertoire

  constructor(_: EnvBoot) {

    this.env = _.env;

    this.site = new c.Site(this.env);
    this.auth = new c.Auth(this.env);
    this.book = new c.Book(this.env);
    this.content = new c.Content(this.env);
    this.repertoire = new c.Repertoire(this.env);    

  }
  
}
