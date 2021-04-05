import * as chest from '../';
import { kbt, kbu, kba } from 'koob';

export default class BookApi {

  bookRepo: chest.book.BookRepo
  
  constructor(bookRepo: chest.book.BookRepo) {
    this.bookRepo = bookRepo;
  }

  editor(user: Maybe<kbu.User>, sessionId: kba.SessionId): Promise<any> {

    const rContent = (content?: kbt.Content) => ({content});

    return sessionId ? this.bookRepo.contentBySourceId(sessionId).then(rContent)
      : Promise.resolve(rContent());
  }
  
  
}
