import { nextString } from 'domnar';
import { SessionId } from '../security/session';
import ChapterMaker, { ChapterMakerData } from './chaptermaker';
import Study, { StudyWithChapter } from './study';

export class StudyMakerImportGame {}

export default class StudyMaker {

  static ImportGame = () => {
    return new StudyMakerImportGame();
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
      'New Study',
      sessionId
    )
    return this.chapterMaker.fromBlank(
      study,
      ChapterMakerData.make('Chapter 1'),
      sessionId).then(chapter =>
        StudyWithChapter.make(study.withChapter(chapter), chapter));
  }
  
}
