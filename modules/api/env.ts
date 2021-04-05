import * as chest from '../';
import BookApi from './bookapi';

export class Env {

  bookEnv: chest.book.Env
  bookApi: BookApi
  
  constructor(bookEnv: chest.book.Env) {
    this.bookEnv = bookEnv;
    
    this.bookApi = new BookApi(this.bookEnv.bookRepo);
  }
  
}
