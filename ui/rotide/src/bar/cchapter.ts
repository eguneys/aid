import { Sub } from 'uuu';
import { AddToBuilder, AddTo, InAbook, InSection, InChapter, InBook } from './chapter';
import * as ton from './tonew';
import { kbt } from 'koob';
import * as xhr from './xhr';

export default class ChapterCtrl {

  toNew: Sub<ton.ToNew | 0>
  addTo: Sub<AddTo>
  addToBuilder: AddToBuilder
  
  constructor() {

    this.addToBuilder = new AddToBuilder(xhr);
    
    this.addTo = new Sub<AddTo>({books: []});
    this.toNew = new Sub<ton.ToNew| 0>(0);

    this.inABook();
  }

  newBook(toNewBook: ton.ToNewBook, name: string) {
    this.addToBuilder.newBook(toNewBook, name).then((_: InBook) => {
      this.toNew.mutatePub(_ => 0);
      this.addTo.mutatePub((__) => _)
    });
  }      

  newChapter(toNewChapter: ton.ToNewChapter, name: string) {
    this.addToBuilder.newChapter(toNewChapter, name).then((_: InChapter) => {
      this.toNew.mutatePub(_ => 0);
      this.addTo.mutatePub((__) => _)
    });
  }

  newSection(toNewSection: ton.ToNewSection, name: string) {
    this.addToBuilder.newSection(toNewSection, name).then((_: InSection) => {
      this.toNew.mutatePub(_ => 0);
      this.addTo.mutatePub((__) => _)
    });
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
}

