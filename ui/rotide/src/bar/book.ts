import { mapOfDefault, MapOfDefault } from 'uuu';
import { kbt, kbr } from 'koob';
import { BooksView, ChaptersView, SectionsView } from './types';

export type MapOfPromise<Key, A> = MapOfDefault<Key, Promise<A>>;

export default class SelectBookCache {

  kApi: kbr.GetApi;
  books: Promise<BooksView>
  chapters: MapOfPromise<kbt.Book, ChaptersView>
  sections: MapOfPromise<kbt.Chapter, SectionsView>
  
  constructor(kApi: kbr.GetApi) {
    this.kApi = kApi;
    this.books = kApi.books()
      .then(books => ({books}));

    this.chapters = mapOfDefault((book: kbt.Book) =>
      kApi.chapters(book.id).then(chapters => ({
        book,
        chapters
      })))();

    this.sections = mapOfDefault((chapter: kbt.Chapter) =>
      this.books
        .then(({books}) =>
          books.find(_ => _.id === chapter.bookId) as kbt.Book)
        .then(book =>
          Promise.all([this.chapters.get(book),
                       kApi.sections(chapter.id)])
            .then(([{ book }, sections]) => ({
              book,
              chapter,
              sections
            }))))();
  }

  newBook(name: string) {
    return this.kApi.newBook(name).then(_ => {
      this.books = this.kApi.books()
        .then(books => ({books}));
      return this.vChapters(_);
    });
  }

  newChapter(v: ChaptersView, name: string) {
    return this.kApi.newChapter(v.book.id, name).then(_ => {
      this.chapters.get(v.book, true);
      return this.vSections(_);
    });
  }

  newSection(v: SectionsView, name: string) {
    return this.kApi.newSection(v.chapter.id, name).then(_ => {
      this.sections.get(v.chapter, true);
      return _;
    });
  }
  
  vBooks() {
    return this.books;
  }

  vChapters(book: kbt.Book) {
    return this.chapters.get(book);
  }

  vSections(chapter: kbt.Chapter) {
    return this.sections.get(chapter);
  }
}
