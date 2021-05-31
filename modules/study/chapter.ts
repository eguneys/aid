import { nextString } from 'domnar';
import { SessionId } from '../security/session';

import { Color } from 'chesst';
import { StudyId } from './study';
import { NodeRoot } from './node';
import { ChapterDoc, ChapterSetupDoc, ChapterMetadataDoc, chapterSetupBsonHandler } from './bson';
import { nodeRootBsonHandler } from './nodebson';

export type ChapterId = string;

export default class Chapter {

  static make = (studyId: StudyId,
                 name: string,
                 setup: ChapterSetup,
                 root: NodeRoot,
                 ownerId: SessionId) =>
    new Chapter(nextString(8),
                studyId,
                name,
                setup,
                root,
                ownerId);
  
    static fromDoc = (doc: ChapterDoc) =>
    new Chapter(doc.id,
                doc.studyId,
                doc.name,
                chapterSetupBsonHandler.read(doc.setup),
                nodeRootBsonHandler.read(doc.root),
                doc.ownerId);

  constructor(readonly id: ChapterId,
              readonly studyId: StudyId,
              readonly name: string,
              readonly setup: ChapterSetup,
              readonly root: NodeRoot,
              readonly ownerId: SessionId) {
  }
  
}

export class ChapterSetup {

  static make = (orientation: Color) => new ChapterSetup(orientation);

  static fromDoc = (doc: ChapterSetupDoc) =>
    new ChapterSetup(doc.orientation==='white'?Color.white:Color.black)
  
  constructor(readonly orientation: Color) {
    
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
