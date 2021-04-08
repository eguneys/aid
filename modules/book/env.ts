import BookApi from './bookapi';
import { BookRepo } from './bookrepo';
import * as chest from '../';
import { kbt, kblr, kbto } from 'koob';

export class Env {

  api: BookApi
  bookRepo: BookRepo
  pager: BookRepo

  constructor(fire: chest.db.Env) {

    let bookDb = fire.db("book");

    this.bookRepo = new BookRepo(
      bookDb.apply<kbt.Book>("book"),
      bookDb.apply<kbt.Chapter>('chapter'),
      bookDb.apply<kbt.Section>('section'),
      bookDb.apply<kbt.Content>('content'),
      bookDb.apply<kblr.SessionBook>('sesboonk'),
      bookDb.apply<kbto.BookOptions>('bookoptions'),
    );

    this.pager = this.bookRepo;

    this.api = new BookApi(this.bookRepo);
    
  }
  
}
