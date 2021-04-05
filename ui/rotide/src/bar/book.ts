import { mapOfDefault, MapOfDefault } from 'uuu';
import { kbt, kbr } from 'koob';
import { BooksView, ChaptersView, SectionsView, SectionView } from './types';

export type MapOfPromise<Key, A> = MapOfDefault<Key, Promise<A>>;

export default class SelectBookCache {

  kApi: kbr.GetApi;
  books: Promise<BooksView>
  chapters: MapOfPromise<kbt.Book, ChaptersView>
  sections: MapOfPromise<kbt.Chapter, SectionsView>
  section: MapOfPromise<kbt.Section, SectionView>
  
  constructor(kApi: kbr.GetApi) {
    this.kApi = kApi;
    this.books = kApi.books()
      .then(books => ({books}));

    this.chapters = mapOfDefault((book: kbt.Book) =>
      Promise.all([kApi.chapters(book.id),
                   kApi.contents(book.id)])
        .then(([chapters, contents]) => ({
          book,
          chapters,
          contents
        })))();

    this.sections = mapOfDefault((chapter: kbt.Chapter) =>
      Promise.all([kApi.book(chapter.bookId),
                   kApi.sections(chapter.id),
                   kApi.contents(chapter.id)])
        .then(([book, sections, contents]) => ({
          book,
          chapter,
          sections,
          contents
        })))();


    this.section = mapOfDefault((section: kbt.Section) =>
      kApi.chapter(section.chapterId).then(
        chapter =>
          Promise.all([kApi.book(chapter.bookId),
                       kApi.contents(section.id)])
            .then(([book, contents]) => ({
              book,
              chapter,
              section,
              contents
            }))))();

  }

  newContentForBook(book: kbt.Book, name: string, content: string) {
    return this.kApi.newContent(book.id, name, content).then(_ => {
      this.chapters.get(book, true);
      return _;
    });
  }

  newContentForChapter(chapter: kbt.Chapter, name: string, content: string) {
    return this.kApi.newContent(chapter.id, name, content).then(_ => {
      this.sections.get(chapter, true);
      return _;
    });
  }

  newContentForSection(section: kbt.Section, name: string, content: string) {
    return this.kApi.newContent(section.id, name, content).then(_ => {
      this.section.get(section, true);
      return _;
    });
  }  

  newBook(name: string) {
    return this.kApi.newBook(name).then(_ => {
      this.books = this.kApi.books()
        .then(books => ({books}));
      return this.vChapters(_);
    });
  }

  newChapter(book: kbt.Book, name: string) {
    return this.kApi.newChapter(book.id, name).then(_ => {
      this.chapters.get(book, true);
      return this.vSections(_);
    });
  }

  newSection(chapter: kbt.Chapter, name: string) {
    return this.kApi.newSection(chapter.id, name).then(_ => {
      this.sections.get(chapter, true);
      return this.vSection(_);
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

  vSection(section: kbt.Section) {
    return this.section.get(section);
  }
}
