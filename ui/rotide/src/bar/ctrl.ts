import ChapterCtrl from './cchapter';

export default class Ctrl {

  cchapter: ChapterCtrl
  
  constructor() {

    this.cchapter = new ChapterCtrl();
    
  }

  trigger() {
    this.cchapter.trigger();
  }
  
}
