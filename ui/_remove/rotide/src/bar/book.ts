import { mapOfDefault, MapOfDefault } from 'uuu';
import { kbt, kbr } from 'koob';
import { BooksView, ChaptersView, SectionsView, SectionView } from './types';

export type MapOfPromise<Key, A> = MapOfDefault<Key, Promise<A>>;

function handleRejection(res: any) {
  return undefined;
}

export default class SelectBookCache {

  kApi: kbr.GetApi;
  books: Promise<Maybe<BooksView>>
  chapters: MapOfPromise<kbt.Book, Maybe<ChaptersView>>
  sections: MapOfPromise<kbt.Chapter, Maybe<SectionsView>>
  section: MapOfPromise<kbt.Section, Maybe<SectionView>>
  
  constructor(kApi: kbr.GetApi) {
    this.kApi = kApi;

    this.books = kApi.books()
      .then(books => ({books}))
      .catch(handleRejection);
    
    this.chapters = mapOfDefault((book: kbt.Book) =>
      Promise.all([kApi.chapters(book.id),
                   kApi.contents(book.id)])
        .then(([chapters, contents]) => ({
          book,
          chapters,
          contents
        })).catch(handleRejection))();

    this.sections = mapOfDefault((chapter: kbt.Chapter) =>
      Promise.all([kApi.book(chapter.bookId),
                   kApi.sections(chapter.id),
                   kApi.contents(chapter.id)])
        .then(([book, sections, contents]) => ({
          book,
          chapter,
          sections,
          contents
        })).catch(handleRejection))();


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


  fetchBooks() {
    this.books = this.kApi.books()
      .then(books => ({books}))
      .catch(handleRejection);
  }

  newContentForBook(book: kbt.Book, name: string, content: string) {
    return this.kApi.newContent(book.id, name, content).then(_ => {
      this.chapters.get(book, true);
      return _;
    }).catch(handleRejection);
  }

  newContentForChapter(chapter: kbt.Chapter, name: string, content: string) {
    return this.kApi.newContent(chapter.id, name, content).then(_ => {
      this.sections.get(chapter, true);
      return _;
    }).catch(handleRejection);
  }

  newContentForSection(section: kbt.Section, name: string, content: string) {
    return this.kApi.newContent(section.id, name, content).then(_ => {
      this.section.get(section, true);
      return _;
    }).catch(handleRejection);
  }  

  newBook(name: string) {
    return this.kApi.newBook(name).then(_ => {
      this.fetchBooks();
      return this.vChapters(_);
    }).catch(handleRejection);
  }

  newChapter(book: kbt.Book, name: string) {
    return this.kApi.newChapter(book.id, name).then(_ => {
      this.chapters.get(book, true);
      return this.vSections(_);
    }).catch(handleRejection);
  }

  newSection(chapter: kbt.Chapter, name: string) {
    return this.kApi.newSection(chapter.id, name).then(_ => {
      this.sections.get(chapter, true);
      return this.vSection(_);
    }).catch(handleRejection);
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
