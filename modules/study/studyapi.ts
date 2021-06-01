import { SessionOrUserId } from '../security/session';
import { StudyMakerImportGame } from './studymaker';
import ChapterMaker, { ChapterMakerData } from './chaptermaker';
import Study, { StudyId, StudyWithChapter } from './study';
import Chapter from './chapter';
import StudyRepo from './studyrepo';
import ChapterRepo from './chapterrepo';
import StudyMaker from './studymaker';
import { fuccess, funit } from '../common';
import id2datas from './id2datas';
import { ChapterData } from 'shared_options';
import { Who } from '../socket/ws/actorApi';
import StudySocket from './studysocket';

export default class StudyApi {

  studyRepo: StudyRepo
  chapterRepo: ChapterRepo
  studyMaker: StudyMaker
  chapterMaker: ChapterMaker

  constructor(studyRepo: StudyRepo,
              chapterRepo: ChapterRepo,
              studyMaker: StudyMaker,
              chapterMaker: ChapterMaker) {

    this.studyRepo = studyRepo;
    this.chapterRepo = chapterRepo;
    this.studyMaker = studyMaker;
    this.chapterMaker = chapterMaker;
    
  }

  byId(id: StudyId) {
    return this.studyRepo.byId(id);
  }

  byIdWithChapter(id: StudyId) {
    return this.byId(id).then(study => {
      if (study) {
        return this.chapterRepo.byId(study.position.chapterId).then(chapter => {
          if (!chapter) {
            return this.chapterRepo.firstByStudy(study.id).then(chapter => {
              if (!chapter) {
                return this.fixNoChapter(study);
              } else {
                let fixed = study.withChapter(chapter);
                return this.studyRepo.updateSomeFields(fixed).then(() =>
                  StudyWithChapter.make(fixed, chapter));
              }
            });
          } else {
            return fuccess(StudyWithChapter.make(study, chapter));
          }
        });
      }
    });
  }

  byIdWithFirstChapter(id: StudyId): Fu<Maybe<StudyWithChapter>> {
    return this.byId(id).then(study => {
      if (study) {
        return this.chapterRepo.firstByStudy(study.id).then(_ => {
          if (_) {
            return StudyWithChapter.make(study, _);
          }
        }).then(_ => {
          if(!_) {
            return this.byIdWithChapter(id);
          }
        });
      }
    });
  }

  addChapter(studyId: StudyId, data: ChapterData) {
    return (who: Who) => {
      this.studyRepo.byId(studyId).then(study => {
        if (study) {
          if (this.Contribute(who, study)) {
            this.chapterMaker
              .apply(study, ChapterMakerData.fromChapterData(data), who.u.session.sessionOrUserId)
              .then(chapter => {
                this.doAddChapter(study, chapter, who);
              });
          }
        }
      });
    };
  }

  doAddChapter(study: Study, chapter: Chapter, who: Who) {
    this.chapterRepo.insert(chapter).then(() => {
      let newStudy = study.withChapter(chapter);
      this.sendTo(study.id)(_ => _.addChapter(newStudy.position, who));
    }).then(() => {
      this.studyRepo.updateNow(study);
    });
  }

  Contribute(who: Who, study: Study) {
    return study.canContribute(who.u.session.sessionOrUserId);
  }
  
  importGame(data: StudyMakerImportGame, sessionOrUserId: SessionOrUserId) {
    return this.create(data, sessionOrUserId);
  }


  create(data: StudyMakerImportGame, sessionOrUserId: SessionOrUserId) {
    return this.studyMaker.make(data, sessionOrUserId)
      .then(sc =>
        this.studyRepo.insert(sc.study)
          .then(() => this.chapterRepo.insert(sc.chapter))
          .then(() => sc));
  }

  fixNoChapter(study: Study) {
    return this.chapterRepo.existsByStudy(study.id).then(_ => {
      if (_ === true) {
        return funit;
      } else {
        return this.chapterMaker.fromBlank(study,
                                    ChapterMakerData.make('Chapter 1'),
                                    study.ownerId)
          .then(this.chapterRepo.insert)
      }
    })
      .then(() => this.byIdWithFirstChapter(study.id));
    
  }

  socket?: StudySocket
  registerSocket(s: StudySocket) {
    this.socket = s;
  }
  sendTo(studyId: StudyId) {
    return (f: (_: StudySocket) => (_: StudyId) => void) => {
      if (this.socket) {
        f(this.socket)(studyId);
      }
    };
  }
  
}
