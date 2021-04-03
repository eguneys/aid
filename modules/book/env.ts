import BookApi from './bookapi';
import { BookRepo } from './bookrepo';
import * as chest from '../';

export class Env {

  api: BookApi
  bookRepo: BookRepo
  pager: BookRepo

  constructor(fire: chest.db.Env) {

    let bookDb = fire.db("book");

    this.bookRepo = new BookRepo(
      bookDb.apply("book"),
      bookDb.apply('chapter'),
      bookDb.apply('section')
    );

    this.pager = this.bookRepo;

    this.api = new BookApi(this.bookRepo);
    
  }
  
}
