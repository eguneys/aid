import { prop, Prop } from 'common';
import AnalyseCtrl from './ctrl';
import { AnalyseSocketSend } from './socket';
import { StudyChapterMeta } from 'shared_options';
import StudyChapterNewFormCtrl from './chapternewform';

export default class ChapterCtrl {

  static make = (chapters: StudyChapterMeta[],
                 send: AnalyseSocketSend,
                 ctrl: AnalyseCtrl) =>
    new ChapterCtrl(chapters, send, ctrl);

  list: Prop<StudyChapterMeta[]> = prop(this.chapters);

  newForm: StudyChapterNewFormCtrl
  
  get size(): number {
    return this.list().length;
  }
  
  constructor(readonly chapters: StudyChapterMeta[],
              readonly send: AnalyseSocketSend,
              readonly root: AnalyseCtrl) {

    this.newForm = StudyChapterNewFormCtrl.make(send,
                                                this.list,
                                                this.root);
    
  }

  toggleNewForm = () => {
    this.newForm.toggle();
  }
  
}
