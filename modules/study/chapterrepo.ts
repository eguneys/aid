import { Coll } from '../db';
import { StudyId } from './study';
import Chapter, { ChapterId, ChapterMetadata } from './chapter';
import { chapterMetadataBsonHandler } from './bson';

export const metadataProjection = {
  name: true
}

export default class ChapterRepo {

  coll: Coll<Chapter>
  
  constructor(coll: Coll<Chapter>) {
    this.coll = coll;
  }

  insert(chapter: Chapter) {
    return this.coll.insert(chapter);
  }

  byId(id: ChapterId) {
    return this.coll.one({ id });
  }

  firstByStudy(studyId: StudyId) {
    return this.coll.one({ studyId });
  }

  existsByStudy(studyId: StudyId) {
    return this.coll.exists({ studyId });
  }

  orderedMetadataByStudy(studyId: StudyId) {
    return this.coll.findProjection<ChapterMetadata>({ studyId },
                                                     metadataProjection,
                                                     chapterMetadataBsonHandler);
  }

  
}
