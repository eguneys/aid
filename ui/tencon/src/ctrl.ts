import { kbm } from 'koobm';

export default class Ctrl {

  content: kbm.ContentM
  
  constructor(opts: any, redraw: Redraw) {

    this.content = opts.data;
    
  }
  
}
