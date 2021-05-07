import User from '../user/user';
import Study from './study';
import Chapter, { ChapterMetadata } from './chapter';
import { PositionRef } from './position';
import StudyRepo from './studyrepo';

export default class JsonView {

  studyRepo: StudyRepo

  constructor(studyRepo: StudyRepo) {
    this.studyRepo = studyRepo;
  }

  
  apply(study: Study,
        chapters: Array<ChapterMetadata>,
        currentChapter: Chapter,
        me: Maybe<User>) {

    return Promise.resolve().then(() => {
      return {
        ...JsonView.studyWrites(study),
        chapters:  chapters.map(_ => JsonView.chapterMetadataWrites(_)),
        chapter: {
          id: currentChapter.id,
          ownerId: currentChapter.ownerId
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
  
}
