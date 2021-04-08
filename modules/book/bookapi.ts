import { kbt, kbu, kba } from 'koob';
import { BookRepo } from './bookrepo';
import { e } from '../common';

export default class BookApi {

  bookRepo: BookRepo
  
  constructor(bookRepo: BookRepo) {
    this.bookRepo = bookRepo;
  }

  createBySessionId(sessionId: kba.SessionId, book: kbt.Book) {
    return this.bookRepo.insert(book)
      .then(() => this.bookRepo.insertSessboo({ sessionId,
                                               bookId: book.id }));
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
    return this.bookRepo.allBySessionId(sessionId).then(books =>
      Promise.all(books.map(_ => this.bookm(_))));
  }

  featured() {
    return this.bookRepo.allFeatured().then(books =>
      Promise.all(books.map(_ => this.bookm(_))));
  }

  bookm(book: kbt.Book) {
    return this.bookRepo.chapters(book.id).then(chapters =>
      Promise.all([
        Promise.all(chapters.map(_ => this.chapterm(_))),
        this.contentsm(book.id)
      ])
        .then(([chapters, contents]) => ({
          book,
          chapters,
          contents
        })));

  }

  chapterm(chapter: kbt.Chapter) {
    return this.bookRepo.sections(chapter.id).then(sections =>
      Promise.all([
        Promise.all(sections.map(_ => this.sectionm(_))),
        this.contentsm(chapter.id)
      ])
        .then(([sections, contents]) => ({
          chapter,
          sections,
          contents
        })));
  }

  sectionm(section: kbt.Section) {
    return this.contentsm(section.id).then(contents => ({
      section,
      contents
    }));
  }

  contentsm(sourceId: kbt.SourceId) {
    return this.bookRepo.contents(sourceId);
  }

  contentm(contentId: kbt.ContentId) {
    return this.bookRepo.content(contentId);
  }

}
