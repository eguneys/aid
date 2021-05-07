import { reptor } from 'options';
import { kbm } from 'koobm';

export default class Ctrl {

  books: Array<kbm.BookM>
  
  constructor(opts: reptor.ReptorOptions, redraw: Redraw) {

    this.books = opts.data.books;
    
  }
  
}
