import { BSONId, DocId } from '../db/bson';
import Opening, { Chapter } from './opening'

export type OpeningDoc = DocId & {
  name: string,
  userId: string
}


export const OpeningBsonHandler: BSONId<Opening> = {
  read(doc: OpeningDoc): Opening {
    return Opening.from_doc(doc)
  },

  write(opening: Opening): OpeningDoc {
    return {
      id: opening.id,
      userId: opening.userId,
      name: opening.name
    }
  }
}


export type ChapterDoc = DocId & {
  name: string,
  openingId: string
}


export const ChapterBsonHandler: BSONId<Chapter> = {
  read(doc: ChapterDoc): Chapter {
    return Chapter.from_doc(doc)
  },

  write(chapter: Chapter): ChapterDoc {
    return {
      id: chapter.id,
      openingId: chapter.openingId,
      name: chapter.name
    }
  }
}
