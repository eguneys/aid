import { nextString } from 'domnar';
import { SessionId } from '../security/session';
import ChapterMaker, { ChapterMakerData } from './chaptermaker';
import Study, { StudyWithChapter } from './study';
import * as StudyForm from './studyform';

export class StudyMakerImportGame {

  form: StudyForm.Data

  constructor(form: StudyForm.Data) {
    this.form = form;
  }
  
}

export default class StudyMaker {

  static ImportGame = (form: StudyForm.Data) => {
    return new StudyMakerImportGame(form);
  };

  chapterMaker: ChapterMaker;

  constructor(chapterMaker: ChapterMaker) {
    
    this.chapterMaker = chapterMaker;
  }

  make(data: StudyMakerImportGame, sessionId: SessionId) {
    return this.createFromScratch(data, sessionId);
  }

  createFromScratch(data: StudyMakerImportGame, sessionId: SessionId) {
    let study = Study.make(
      sessionId,
      'New Study'
    )
    return this.chapterMaker.fromBlank(
      study,
      ChapterMakerData.make('Chapter 1'),
      sessionId).then(chapter =>
        StudyWithChapter.make(study.withChapter(chapter), chapter));
  }
  
}
