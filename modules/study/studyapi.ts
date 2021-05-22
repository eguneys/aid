import { SessionId } from '../security/session';
import { StudyMakerImportGame } from './studymaker';
import ChapterMaker, { ChapterMakerData } from './chaptermaker';
import Study, { StudyId, StudyWithChapter } from './study';
import Chapter from './chapter';
import StudyRepo from './studyrepo';
import ChapterRepo from './chapterrepo';
import StudyMaker from './studymaker';
import { fuccess, funit } from '../common';
import id2datas from './id2datas';

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

  // async importPgns(data: StudyMakerImportGame, sessionId: SessionId) {
  //   let datas = await id2datas(data.form.id);

  //   if (datas && datas.length > 0) {

  //     let study = Study.make(sessionId,
  //                            'New Study');

  //     await this.studyRepo.insert(study);

  //     let firstChapter: Maybe<Chapter>;
      
  //     for (let data of datas) {
  //       firstChapter ||= await this.addChapter(study.id, data, sessionId);
  //     }


  //     return StudyWithChapter.make(study, firstChapter!);
  //   }
  // }

  addChapter(studyId: StudyId, data: ChapterMakerData, sessionId: SessionId) {
    return this.studyRepo.byId(studyId).then(study => {
      if (study) {
        return this.chapterMaker.fromBlank(study, data, sessionId).then(chapter => {
          this.chapterRepo.insert(chapter);
          return chapter;
        });
      }
    });
    
  }
  
  importGame(data: StudyMakerImportGame, sessionId: SessionId) {
    return this.create(data, sessionId);
  }


  create(data: StudyMakerImportGame, sessionId: SessionId) {
    return this.studyMaker.make(data, sessionId)
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
  
}
