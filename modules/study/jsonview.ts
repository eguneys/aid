import User from '../user/user';
import Study from './study';
import Chapter, { ChapterMetadata, ChapterSetup } from './chapter';
import { PositionRef } from './position';
import StudyRepo from './studyrepo';
import { study } from 'shared_options';

export default class JsonView {

  studyRepo: StudyRepo

  constructor(studyRepo: StudyRepo) {
    this.studyRepo = studyRepo;
  }

  
  apply(study: Study,
        chapters: Array<ChapterMetadata>,
        currentChapter: Chapter,
        me: Maybe<User>): Fu<study.StudyData> {

    return Promise.resolve().then(() => {
      return {
        ...JsonView.studyWrites(study),
        chapters:  chapters.map(_ => JsonView.chapterMetadataWrites(_)),
        chapter: {
          id: currentChapter.id,
          name: currentChapter.name,
          ownerId: currentChapter.ownerId,
          setup: JsonView.chapterSetupWrites(currentChapter.setup)
        }
      }
    });
  }

  static studyWrites = (s: Study) => ({
    id: s.id,
    name: s.name,
    position: JsonView.positionRefWrites(s.position),
    ownerId: s.ownerId
  });

  static positionRefWrites = (ref: PositionRef) => ({
    chapterId: ref.chapterId,
    path: ref.path.key
  });
  
  static chapterMetadataWrites = (metadata: ChapterMetadata) => ({
    id: metadata.id,
    name: metadata.name
  });

  static chapterSetupWrites = (setup: ChapterSetup) => ({
    orientation: setup.orientation.long as LongColor
  });  
  
}
