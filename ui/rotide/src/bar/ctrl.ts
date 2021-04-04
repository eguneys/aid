import { Redraw } from '../types';
import SelectBookCache from './book';
import * as kApi from './xhr';
import { kbt } from 'koob';
import * as t from './types';

export default class Ctrl {

  sbCache: SelectBookCache;
  vSelectBook?: t.SelectBookView;
  nameSelectBook?: string;
  isNewDialogOpen: boolean = false;
  isBarOpen: boolean = false;
  redraw: Redraw;
  
  constructor(redraw: Redraw) {
    this.redraw = redraw;
    this.sbCache = new SelectBookCache(kApi);
  }

  close() {
    if (this.isNewDialogOpen) {
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
        return this.sbCache.newBook(this.nameSelectBook).then(_ => {
          this.vSelectBook = _;
          this.isNewDialogOpen = false;
        });
      } else if (t.isChaptersView(vSelectBook)) {
        return this.sbCache.newChapter(vSelectBook, this.nameSelectBook).then(_ => {
          this.vSelectBook = _;
          this.isNewDialogOpen = false;
        });
      } else if (t.isSectionsView(vSelectBook)) {
        return this.sbCache.newSection(vSelectBook, this.nameSelectBook).then(_ => {
          this.isNewDialogOpen = false;
        });
      }
    }
  }
  
}
