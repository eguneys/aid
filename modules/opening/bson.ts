import { BSONId, DocId } from '../db/bson';
import Opening, { Chapter } from './opening'
import { flat, flat_root, FRoot } from 'chesstwo'
import { MoveRoot, MoveNode } from './node'

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
  openingId: string,
  root: string
}

const fn_json = (obj: any) => JSON.stringify(obj)

export const ChapterBsonHandler: BSONId<Chapter> = {
  read(doc: ChapterDoc): Chapter {
    return Chapter.from_doc(doc)
  },

  write(chapter: Chapter): ChapterDoc {
    return {
      id: chapter.id,
      openingId: chapter.openingId,
      name: chapter.name,
      root: flat(chapter.root, fn_json, fn_json)
    }
  }
}
