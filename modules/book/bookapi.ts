import { kbt, kbu } from 'koob';
import { BookRepo } from './bookrepo';
import { e } from '../common';

export default class BookApi {

  bookRepo: BookRepo
  
  constructor(bookRepo: BookRepo) {
    this.bookRepo = bookRepo;
  }

  create(book: kbt.Book) {
    return this.bookRepo.insert(book);
  }

  createChapter(chapter: kbt.Chapter) {
    return this.bookRepo.insertChapter(chapter);
  }

  createSection(section: kbt.Section) {
    return this.bookRepo.insertSection(section);
  }

  createContent(content: kbt.Content) {
    return this.bookRepo.insertContent(content);
  }

  updateContent(contentId: kbt.ContentId, update: kbt.UpdateContent) {
    return this.bookRepo.updateContent(contentId, update);
  }

  updateContentOrDefault(contentId: kbt.ContentId, update: kbt.UpdateContent, sourceId?: kbt.SourceId) {
    if (contentId === 'default') {
      if (sourceId) {
        return this.bookRepo.insertContentDenormalized(update, sourceId);
      } else {
        return Promise.reject('No user id');
      }
    } else {
      return this.updateContent(contentId, update);
    }
  }
  
}
