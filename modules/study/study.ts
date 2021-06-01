import { nextString } from 'domnar';
import { SessionOrUserId } from '../security/session';
import Chapter from './chapter';
import Position, { PositionRef } from './position';
import Path from './path';
import { StudyDoc, positionRefBsonHandler } from './bson';

export type StudyId = string;

export default class Study {

  static make = (ownerId: SessionOrUserId,
                 name: string,
                 studyId: StudyId = nextString(8)) => {
                   let position = PositionRef.make("", Path.root);
                   return new Study(
                     studyId,
                     ownerId,
                     name,
                     position);
                 }
  
  static fromDoc = (doc: StudyDoc) =>
    new Study(
      doc.id,
      doc.ownerId,
      doc.name,
      positionRefBsonHandler.read(doc.position)
    );

  id: StudyId
  position: PositionRef
  ownerId: SessionOrUserId
  name: string
  
  constructor(id: StudyId,
              ownerId: SessionOrUserId,
              name: string,
              position: PositionRef) {
    this.id = id;
    this.ownerId = ownerId;
    this.name = name;
    this.position = position;
  }

  canContribute(id: SessionOrUserId) {
    return this.ownerId === id;
  }

  isCurrent(c: Chapter) {
    return c.id === this.position.chapterId;
  }
  
  withChapter(chapter: Chapter) {
    return this.isCurrent(chapter)? this:
      this.rewindTo(chapter);
  }

  rewindTo(chapter: Chapter) {
    return new Study(this.id,
                     this.ownerId,
                     this.name,
                     PositionRef.make(chapter.id,
                                      Path.root));
  }
  
}


export class StudyWithChapter {
  static make = (study: Study, chapter: Chapter) =>
    new StudyWithChapter(study, chapter);
  
  study: Study
  chapter: Chapter

  constructor(study: Study,
              chapter: Chapter) {
    this.study = study;
    this.chapter = chapter;
  }
}
