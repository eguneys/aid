import { Redraw } from '../types';
import SelectBookCache from './book';
import * as kApi from '../xhr';
import { default as BaseCtrl } from '../ctrl';
import { kbt } from 'koob';
import * as t from './types';

export default class Ctrl {

  baseCtrl: BaseCtrl;
  sbCache: SelectBookCache;
  vSelectBook?: t.SelectBookView;
  nameSelectBook?: string;
  isNewContentDialogOpen: boolean = false;
  isNewDialogOpen: boolean = false;
  isBarOpen: boolean = false;
  redraw: Redraw;
  
  constructor(baseCtrl: BaseCtrl, redraw: Redraw) {
    this.baseCtrl = baseCtrl;
    this.redraw = redraw;
    this.sbCache = new SelectBookCache(kApi);
  }

  close() {
    if (this.isNewContentDialogOpen) {
      this.isNewContentDialogOpen = false;
    } else if (this.isNewDialogOpen) {
      this.isNewDialogOpen = false;
    } else if (this.vSelectBook) {
      this.vSelectBook = undefined;
    } else {
      this.isBarOpen = false;
    }
  }

  toggle() {
    if (this.isBarOpen && this.vSelectBook) {
      this.vSelectBook = undefined;
    }
    this.isBarOpen = !this.isBarOpen;
  }

  openSelectBookView() {
    return this.sbCache.vBooks().then(_ => {
      this.vSelectBook = _;
    });
  }

  openSelectChapters(book: kbt.Book) {
    return this.sbCache.vChapters(book).then(_ => {
      this.vSelectBook = _;
    });
  }

  openSelectSections(chapter: kbt.Chapter) {
    return this.sbCache.vSections(chapter).then(_ => {
      this.vSelectBook = _;
    });
  }

  openSelectSection(section: kbt.Section) {
    return this.sbCache.vSection(section).then(_ => {
      this.vSelectBook = _;
    });
  }

  openContent(content: kbt.Content) {
    this.baseCtrl.loadContent(content);
    this.isBarOpen = false;
    this.isNewContentDialogOpen = false;
    this.vSelectBook = undefined;
  }

  openNewContentDialog() {
    this.isNewContentDialogOpen = true;
  }

  closeNewContentDialog() {
    this.isNewContentDialogOpen = false;
  }

  openNewBookDialog() {
    this.isNewDialogOpen = true;
  }

  closeNewBookDialog() {
    this.isNewDialogOpen = false;
  }

  submitNewBookDialog() {
    if (this.nameSelectBook) {

      let vSelectBook = this.vSelectBook;
      if (!vSelectBook) {
        return;
      }

      if (t.isBooksView(vSelectBook)) {
        return this.sbCache
          .newBook(this.nameSelectBook).then(_ => {
          this.vSelectBook = _;
          this.isNewDialogOpen = false;
        });
      } else if (t.isChaptersView(vSelectBook)) {
        if (this.isNewContentDialogOpen) {
          let { book } = vSelectBook;
          return this.sbCache
            .newContentForBook(book, this.nameSelectBook, 'content')
            .then(_ => {
              this.baseCtrl.loadContent(_);
              this.isBarOpen = false;
              this.isNewContentDialogOpen = false;
              this.vSelectBook = undefined;
              // this.sbCache.vChapters(book).then(_ => {
              //   this.vSelectBook = _;
              // });
            });
        }
        return this.sbCache
          .newChapter(vSelectBook.book, this.nameSelectBook).then(_ => {
          this.vSelectBook = _;
          this.isNewDialogOpen = false;
        });
      } else if (t.isSectionsView(vSelectBook)) {
        if (this.isNewContentDialogOpen) {
          let { chapter } = vSelectBook;
          return this.sbCache
            .newContentForChapter(chapter, this.nameSelectBook, 'content')
            .then(_ => {
              this.baseCtrl.loadContent(_);
              this.isNewContentDialogOpen = false;
              this.isBarOpen = false;
              this.vSelectBook = undefined;
              // this.sbCache.vSections(chapter).then(_ => {
              //   this.vSelectBook = _;
              // });
            });
        }
        return this.sbCache
          .newSection(vSelectBook.chapter, this.nameSelectBook).then(_ => {
          this.isNewDialogOpen = false;
        });
      } else if (t.isSectionView(vSelectBook)) {
        return this.sbCache
          .newContentForSection(vSelectBook.section, this.nameSelectBook, 'content')
          .then(_ => {
            this.baseCtrl.loadContent(_);
            this.isNewContentDialogOpen = false;
          });
      }
    }
  }
  
}
