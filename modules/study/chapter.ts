import { nextString } from 'domnar';
import { SessionId } from '../security/session';

import { StudyId } from './study';
import { NodeRoot } from './node';
import { ChapterDoc, ChapterMetadataDoc } from './bson';
import { nodeRootBsonHandler } from './nodebson';

export type ChapterId = string;

export default class Chapter {

  static make = (studyId: StudyId,
                 name: string,
                 root: NodeRoot,
                 ownerId: SessionId) =>
    new Chapter(nextString(8),
                studyId,
                name,
                root,
                ownerId);
  
    static fromDoc = (doc: ChapterDoc) =>
    new Chapter(doc.id,
                doc.studyId,
                doc.name,
                nodeRootBsonHandler.read(doc.root),
                doc.ownerId);

  id: ChapterId
  studyId: StudyId
  ownerId: SessionId
  name: string
  root: NodeRoot
  
  constructor(id: ChapterId,
              studyId: StudyId,
              name: string,
              root: NodeRoot,
              ownerId: SessionId) {
    this.id = id;
    this.studyId = studyId;
    this.name = name;
    this.root = root;
    this.ownerId = ownerId;
  }
  
}

export class ChapterMetadata {

  static fromDoc = (doc: ChapterMetadataDoc) =>
    new ChapterMetadata(doc.id, doc.name);
  
  static make = (id: ChapterId,
                 name: string) => new ChapterMetadata(id, name);
  
  id: ChapterId
  name: string

  constructor(id: ChapterId,
              name: string) {
    this.id = id;
    this.name = name;
  }
  
}
