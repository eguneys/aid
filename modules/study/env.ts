import * as chest from '../';
import * as bson from './bson';
import Study from './study';
import Chapter from './chapter';
import StudyApi from './studyapi';
import StudyRepo from './studyrepo';
import ChapterMaker from './chaptermaker';
import StudyMaker from './studymaker';
import ChapterRepo from './chapterrepo';
import JsonView from './jsonview';


export class Env {

  db: chest.db.Db;
  
  chapterMaker: ChapterMaker
  studyMaker: StudyMaker
  chapterRepo: ChapterRepo
  studyRepo: StudyRepo
  api: StudyApi
  jsonView: JsonView
  
  constructor(db: chest.db.Db) {
    this.db = db;
    
    this.studyRepo = new StudyRepo(db.apply<Study>('study', bson.studyBsonHandler));
    this.chapterRepo = new ChapterRepo(db.apply<Chapter>('chapter', bson.chapterBsonHandler));

    this.chapterMaker = new ChapterMaker();
    this.studyMaker = new StudyMaker(this.chapterMaker);
    
    this.api = new StudyApi(this.studyRepo,
                            this.chapterRepo,
                            this.studyMaker,
                            this.chapterMaker);

    this.jsonView = new JsonView(this.studyRepo);
  }
  
}
