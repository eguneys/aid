import * as chest from '../';
import * as bson from './bson';
import Study, { StudyId } from './study';
import Chapter from './chapter';
import StudyApi from './studyapi';
import StudyRepo from './studyrepo';
import ChapterMaker from './chaptermaker';
import StudyMaker from './studymaker';
import ChapterRepo from './chapterrepo';
import JsonView from './jsonview';
import StudySocket from './studysocket';
import { SocketVersion, RemoteSocket } from '../socket';

export class Env {

  chapterMaker: ChapterMaker
  studyMaker: StudyMaker
  chapterRepo: ChapterRepo
  studyRepo: StudyRepo
  api: StudyApi
  jsonView: JsonView
  socket: StudySocket
  
  constructor(readonly db: chest.db.Db,
              readonly remoteSocketApi: RemoteSocket) {
    
    this.studyRepo = new StudyRepo(db.apply<Study>('study', bson.studyBsonHandler));
    this.chapterRepo = new ChapterRepo(db.apply<Chapter>('chapter', bson.chapterBsonHandler));

    this.chapterMaker = new ChapterMaker();
    this.studyMaker = new StudyMaker(this.chapterMaker);
    
    this.api = new StudyApi(this.studyRepo,
                            this.chapterRepo,
                            this.studyMaker,
                            this.chapterMaker);

    this.jsonView = new JsonView(this.studyRepo);

    this.socket = new StudySocket(this.remoteSocketApi,
                                  this.api,
                                  this.jsonView);
  }

  version(studyId: StudyId): Fu<SocketVersion> {
    return this.socket.rooms.ask<SocketVersion>(studyId)(_ => _.version);
  }
  
}
