import { h, vh, vmap, vex, VHNode, VHCEx } from 'hhh';
import ChapterCtrl from './cchapter';
import * as c from './chapter';
import { kbt } from 'koob';

export default class VChapter {

  ctrl: ChapterCtrl
  
  constructor(ctrl: ChapterCtrl) {
    this.ctrl = ctrl;
  }
        
  vsAddToBook(inABook: c.InAbook) {

    let v$books = inABook.books.map(_ =>
      vh('div.book.item', {}, {
        listeners: {
          click: (e, __) => {
            this.ctrl.inBook(inABook, _);
          }
        }
      }, [h('span', _.name)]));

    return [
      h('div.headline', 'Add to Book'),
      h('div.books', v$books),
      h('button', [h('i', '+'), 'New Book'])
    ];
  }

  vBackToABook(inBook: c.InBook, book: kbt.Book) {
    return vh('div.headline', {}, {
      listeners: {
        click: (e, _) => {
          this.ctrl.backToInABook(inBook)
        }
      }
    }, [h('i', '←'), h('span', book.name)]);
  }

  vBackToBook(inChapter: c.InChapter, chapter: kbt.Chapter) {
    return vh('div.headline', {}, {
      listeners: {
        click: (e, _) => {
          this.ctrl.backToInBook(inChapter)
        }
      }
    }, [h('i', '←'), h('span', chapter.name)]);    
  }
  

  vsAddToChapter(inBook: c.InBook) {
    let {book, chapters} = inBook;
    let v$chapters = chapters.map(_ =>
      vh('div.chapter.item', {}, {
        listeners: {
          click: (e, __) => {
            this.ctrl.inChapter(inBook, _);
          }
        }
      }, [h('span', _.name)]));
    
    return [
      this.vBackToABook(inBook, book),
      h('div.chapters', v$chapters),
      h('button', [h('i', '+'), 'New Chapter'])
    ];
  }

  vsAddToSection(inChapter: c.InChapter) {
    let { book, chapter, sections } = inChapter;
    
    let v$sections = sections.map(_ =>
      h('div.section.item', [_.name]));

    return [
      this.vBackToABook(inChapter, book),
      this.vBackToBook(inChapter, chapter),
      h('div.sections', v$sections),
      h('button', [h('i', '+'), 'New Section'])
    ];
  }

  vAddToBookPopup() {

    let v$content = vex([h('div', 'default')]);

    this.ctrl.addTo.sub(addTo => {
      if (c.isInABook(addTo)) {
        v$content.replace(this.vsAddToBook(addTo));
      } else if (c.isInBook(addTo)) {
        v$content.replace(this.vsAddToChapter(addTo));
      } else if (c.isInChapter(addTo)) {
        v$content.replace(this.vsAddToSection(addTo));
      } else if (c.isInSection(addTo)) {
        console.log(addTo);
      }
    });

    return h('div.popup.addtobook', [v$content]);
  }
    
}
