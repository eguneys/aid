import * as bt from './types';
import { Coll } from '../db/coll';


export class BookRepo {

  coll: Coll

  constructor(coll: Coll) {
    this.coll = coll;
  }
  
  async insert(book: bt.Book) {
    return this.coll.insert(book)
  }

  async all() {
    return this.coll
      .find({});
  }
  
}
