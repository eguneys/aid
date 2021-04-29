import BookApi from './bookapi';
import { BookRepo } from './bookrepo';
import { MiscRepo } from './miscrepo';
import * as chest from '../';
import { kbt, kblr, kbte } from 'koob';

export class Env {

  api: BookApi
  bookRepo: BookRepo
  pager: BookRepo
  miscRepo: MiscRepo

  constructor(fire: chest.db.Env) {

    let bookDb = fire.db("book");

    this.miscRepo = new MiscRepo(
      bookDb.apply<kbte.SessionLastContent>("sescon")
    )

    this.bookRepo = new BookRepo(
      bookDb.apply<kbt.Book>("book"),
      bookDb.apply<kbt.Chapter>('chapter'),
      bookDb.apply<kbt.Section>('section'),
      bookDb.apply<kbt.Content>('content'),
      bookDb.apply<kblr.SessionBook>('sesboonk'),
      bookDb.apply<kbte.BookOptions>('bookoptions'),
    );

    this.pager = this.bookRepo;

    this.api = new BookApi(this.bookRepo,
                           this.miscRepo);
    
  }
  
}
