import { mapOfDefault, MapOfDefault } from 'uuu';
import { kbt, kbr } from 'koob';

export type InAbook = {
  books: Array<kbt.Book>
}

export type InBook = InAbook & {
  book: kbt.Book,
  chapters: Array<kbt.Chapter>
};
export type InChapter = InBook & {
  chapter: kbt.Chapter,
  sections: Array<kbt.Section>
}

export type InSection = InChapter & {
  section: kbt.Section
}

export type AddTo =
  | InAbook
  | InBook
  | InChapter
  | InSection

export function isInSection(_: AddTo): _ is InSection {
  return ((_ as InSection).section !== undefined);
}

export function isInChapter(_: AddTo): _ is InChapter {
  return ((_ as InChapter).chapter !== undefined) && !isInSection(_);
}

export function isInBook(_: AddTo): _ is InBook {
  return ((_ as InBook).book !== undefined) && !isInChapter(_) && !isInSection(_);
}

export function isInABook(_: AddTo): _ is InAbook {
  return ((_ as InAbook).books !== undefined && Object.keys(_).length === 1);
}

export type MapOfPromise<Key, A> = MapOfDefault<Key, Promise<A>>

export class AddToBuilder {

  sections: MapOfPromise<kbt.ChapterId, Array<kbt.Section>>
  chapters: MapOfPromise<kbt.BookId, Array<kbt.Chapter>>
  books: Promise<Array<kbt.Book>>
  kApi: kbr.GetApi
  
  constructor(kApi: kbr.GetApi) {
    this.kApi = kApi;
    
    this.chapters = mapOfDefault((_: kbt.BookId) => this.kApi.chapters(_))();
    this.sections = mapOfDefault((_: kbt.ChapterId) => this.kApi.sections(_))();
    this.books = kApi.books();
  }

  inABook() {
    return this.books.then(books => ({books}));
  }

  inBook(inABook: InAbook, book: kbt.Book) {
    return this.chapters.get(book.id).then(chapters => ({
      ...inABook,
      book,
      chapters
    }))
  }

  inChapter(inBook: InBook, chapter: kbt.Chapter) {
    return this.sections.get(chapter.id).then(sections => ({
      ...inBook,
      chapter,
      sections
    }));
  }

  inSection(inChapter: InChapter, section: kbt.Section) {
    return {
      ...inChapter,
      section
    };
  }
  
}
