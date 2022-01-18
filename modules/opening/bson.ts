import { BSONId, DocId } from '../db/bson';
import Opening, { flat_vec2map, Chapter } from './opening'
import { Fen, flat, flat_root, FRoot, Path } from 'chesstwo'
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

export type FlatRoot = {
  [key in Path]: MoveRoot | MoveNode
}

export type Fens = {
  [key in Fen]: Path
}

export type ChapterDoc = DocId & {
  name: string,
  openingId: string,
  site?: string,
  root: FlatRoot
}

export const ChapterBsonHandler: BSONId<Chapter> = {
  read(doc: ChapterDoc): Chapter {
    return Chapter.from_doc(doc)
  },

  write(chapter: Chapter): ChapterDoc {
    let _froot = flat<MoveNode, MoveRoot>(chapter.root)
    let root = flat_vec2map(_froot)
    
    return {
      id: chapter.id,
      openingId: chapter.openingId,
      name: chapter.name,
      site: chapter.site,
      root,
    }
  }
}
