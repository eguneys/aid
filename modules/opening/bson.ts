import { BSONId, DocId } from '../db/bson';
import Opening from './opening'

export type OpeningDoc = DocId & {
}


export const OpeningBsonHandler: BSONId<Opening> = {
  read(doc: OpeningDoc): Opening {
    return Opening.make(doc)
  },

  write(opening: Opening): OpeningDoc {
    return {
      id: opening.id
    }
  }
}
