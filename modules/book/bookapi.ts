import { kbt, kbu, kba } from 'koob';
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

  list(sessionId: kba.SessionId, me: Maybe<kbu.User>) {
    return this.bookRepo.all().then(books =>
      Promise.all(books.map(book =>
        Promise.all([
          this.bookRepo.contents(book.id),
          this.bookRepo.chapters(book.id)
        ]).then(([contents, chapters]) =>
          Promise.all(chapters.map(chapter =>
            Promise.all([
              this.bookRepo.contents(chapter.id),
              this.bookRepo.sections(chapter.id)
            ]).then(([contents, sections]) =>
              Promise.all(sections.map(section =>
                this.bookRepo.contents(section.id).then(contents => [
                  section, contents
                ])))
                .then(sections => [chapter, contents, sections]))))
            .then(chapters => [book, contents, chapters])))));
  }
  
}
