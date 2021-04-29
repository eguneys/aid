import { kbt, kbu, kba } from 'koob';
import { BookRepo } from './bookrepo';
import { MiscRepo } from './miscrepo';
import { e } from '../common';

export default class BookApi {

  bookRepo: BookRepo
  miscRepo: MiscRepo
  
  constructor(bookRepo: BookRepo,
              miscRepo: MiscRepo) {
    this.bookRepo = bookRepo;
    this.miscRepo = miscRepo;
  }

  async createBySessionOrUser(sessionId: kba.SessionId, userId: Maybe<kbu.UserId>, book: kbt.Book) {
    await this.bookRepo.insert(book)
    
    await this.bookRepo.insertSessboo(sessionId, userId, book.id);
  }

  async delete(bookId: kbt.BookId) {
    await this.bookRepo.delete(bookId);
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

  async updateContent(sessionId: kba.SessionId, contentId: kbt.ContentId, update: kbt.UpdateContent) {
    await this.miscRepo.upsert(sessionId, contentId);
    return this.bookRepo.updateContent(contentId, update);
  }

  async updateContentOrDefault(sessionId: kba.SessionId, contentId: kbt.ContentId, update: kbt.UpdateContent) {
    if (contentId === 'default') {
      return this.bookRepo.insertContentDenormalized(update, sessionId);
    } else {
      await this.updateContent(sessionId, contentId, update);
    }

    return this.bookRepo.content(contentId);
  }

  list(sessionId: kba.SessionId, me: Maybe<kbu.User>) {
    return this.bookRepo.allBySessionId(sessionId, me?.id).then(books =>
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
