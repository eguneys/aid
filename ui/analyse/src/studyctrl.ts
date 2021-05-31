import { StudyData } from 'shared_options';
import AnalyseCtrl from './ctrl';
import { AnalyseSocketSend } from './socket';
import ChapterCtrl from './chapterctrl';

export default class StudyCtrl {

  static make = (ctrl: AnalyseCtrl,
                 data: StudyData) => new StudyCtrl(ctrl,
                                                   data);

  redraw: Redraw;
  send: AnalyseSocketSend;
  
  chapters: ChapterCtrl;


  get canContribute(): boolean {
    return true;
  }

    constructor(readonly ctrl: AnalyseCtrl,
              readonly data: StudyData) {
      
      this.send = ctrl.socket.send;
      this.redraw = ctrl.redraw;
      
      this.chapters = ChapterCtrl.make(
        this.data.chapters,
        this.send,
        this.ctrl
      );
      
  }
  
}
