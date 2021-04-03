import { kbt } from 'koob';
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
  
}
