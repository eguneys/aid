import * as chest from '../';
import { kbt, kbu } from 'koob';

export default class BookApi {

  bookRepo: chest.book.BookRepo
  
  constructor(bookRepo: chest.book.BookRepo) {
    this.bookRepo = bookRepo;
  }

  editor(user: Maybe<kbu.User>): Promise<any> {

    const rContent = (content?: kbt.Content) => ({content});

    return user ? this.bookRepo.contentBySourceId(user.id).then(rContent)
      : Promise.resolve(rContent());
  }
  
  
}
