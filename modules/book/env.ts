import { BookRepo } from './bookrepo';
import * as chest from '../';

export class Env {

  pager: BookRepo

  constructor(fire: chest.db.Env) {

    let bookDb = fire.db("book");
    
    this.pager = new BookRepo(bookDb.apply("book"));

  }
  
}
