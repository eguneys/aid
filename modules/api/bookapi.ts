import * as chest from '../';
import { kbt, kbu, kba } from 'koob';

export default class BookApi {

  miscRepo: chest.book.MiscRepo
  bookRepo: chest.book.BookRepo
  
  constructor(bookRepo: chest.book.BookRepo,
              miscRepo: chest.book.MiscRepo) {
    this.bookRepo = bookRepo;
    this.miscRepo = miscRepo;
  }

  editor(user: Maybe<kbu.User>, sessionId: kba.SessionId): Promise<any> {

    const rContent = (content?: kbt.Content) => ({content});

    return sessionId ? this.miscRepo.get(sessionId)
      .then(slc => {
        if (slc?.lastContent) {
          return this.bookRepo.content(slc.lastContent);
        }
      })
      .then(rContent)
      : Promise.resolve(rContent());
  }
  
  
}
