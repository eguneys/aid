import BookApi from './bookapi';
import { BookRepo } from './bookrepo';
import * as chest from '../';
import { kbt } from 'koob';

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
      bookDb.apply<kbt.Content>('content')
    );

    this.pager = this.bookRepo;

    this.api = new BookApi(this.bookRepo);
    
  }
  
}
