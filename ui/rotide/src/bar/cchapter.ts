import { Sub } from 'uuu';
import { AddToBuilder, AddTo, InAbook, InSection, InChapter, InBook } from './chapter';
import { kbt } from 'koob';
import { mockXhr } from './xhr';

export default class ChapterCtrl {

  addTo: Sub<AddTo>
  addToBuilder: AddToBuilder
  
  constructor() {

    this.addToBuilder = new AddToBuilder(mockXhr);
    
    this.addTo = new Sub<AddTo>({books: []});

    this.inABook();
  }

  trigger() {
    this.addTo.pub();
  }

  inABook() {
    this.addToBuilder.inABook().then((_: InAbook) =>
      this.addTo.mutatePub((__) => _));
  }

  inBook(inABook: InAbook, book: kbt.Book) {
    this.addToBuilder.inBook(inABook, book).then((_: InBook) =>
      this.addTo.mutatePub((__) => _));
  }

  inChapter(inBook: InBook, chapter: kbt.Chapter) {
    this.addToBuilder.inChapter(inBook, chapter).then((_: InChapter) =>
      this.addTo.mutatePub((__) => _));
  }

  inSection(inChapter: InChapter, section: kbt.Section) {
    let _ = this.addToBuilder.inSection(inChapter, section);
    this.addTo.mutatePub((__) => _);
  }

  backToInABook(inBook: InBook) {
    this.addTo.mutatePub((_) => ({books: inBook.books}));
  }

  backToInBook(inChapter: InChapter) {
    let { chapter, sections, ...inBook } = inChapter;
    this.addTo.mutatePub((_) => ({...inBook}));
  }
  
}

