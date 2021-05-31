import { BSON, BSONId, DocId, Doc } from '../db/bson';
import { SessionId } from '../security/session';
import Study, { StudyId } from './study';
import Chapter, { ChapterMetadata, ChapterSetup } from './chapter';
import { PositionRef } from './position';
import { NodeRoot } from './node';
import { RootFullDoc, nodeRootBsonHandler } from './nodebson';

export type ChapterMetadataDoc = DocId & {
  name: string
}

export type ChapterDoc = DocId & {
  studyId: StudyId,
  name: string,
  setup: ChapterSetupDoc,
  root: RootFullDoc,
  ownerId: SessionId
};

export type StudyDoc = DocId & {
  ownerId: SessionId,
  name: string,
  position: Doc
};

export type ChapterSetupDoc = {
  orientation: string
}

export const chapterBsonHandler: BSONId<Chapter> = {
  read(doc: ChapterDoc): Chapter {
    return Chapter.fromDoc(doc);
  },
  write(chapter: Chapter): ChapterDoc {
    return {
      id: chapter.id,
      studyId: chapter.studyId,
      name: chapter.name,
      setup: chapterSetupBsonHandler.write(chapter.setup) as ChapterSetupDoc,
      root: nodeRootBsonHandler.write(chapter.root) as RootFullDoc,
      ownerId: chapter.ownerId
    };
  }
}

export const studyBsonHandler: BSONId<Study> = {
  read(doc: StudyDoc): Study {
    return Study.fromDoc(doc);
  },
  write(study: Study): StudyDoc {
    return {
      id: study.id,
      ownerId: study.ownerId,
      name: study.name,
      position: positionRefBsonHandler.write(study.position)
    };
  }  
}

export const positionRefBsonHandler: BSON<PositionRef> = {
  read(doc: string): PositionRef {
    return PositionRef.decode(doc);
  },

  write(ref: PositionRef): string {
    return ref.encode;
  }
}

export const chapterMetadataBsonHandler: BSONId<ChapterMetadata> = {
  read(doc: ChapterMetadataDoc): ChapterMetadata {
    return ChapterMetadata.fromDoc(doc);
  },

  write(metadata: ChapterMetadata): ChapterMetadataDoc {
    return {
      id: metadata.id,
      name: metadata.name
    };
  }
}

export const chapterSetupBsonHandler: BSON<ChapterSetup> = {
  read(doc: ChapterSetupDoc): ChapterSetup {
    return ChapterSetup.fromDoc(doc);
  },

  write(setup: ChapterSetup): ChapterSetupDoc {
    return {
      orientation: setup.orientation.long
    };
  }
}
