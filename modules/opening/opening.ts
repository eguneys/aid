import { nextString } from 'domnar'
import { ChapterDoc, OpeningDoc } from './bson'
import { UserId } from '../user/user'


export default class Opening {

  static make = (name: string,
  userId: UserId) =>
    new Opening(nextString(8),
      userId,
      name)

  static make2 = (name: string,
    opening: Opening) =>
    new Opening(opening.id,
      opening.userId,
      name)

  static from_doc = (doc: OpeningDoc) =>
    new Opening(doc.id,
      doc.userId,
      doc.name)

  constructor(readonly id: string,
    readonly userId: UserId,
    readonly name: string) {
  }

}

export class Chapter {

  static from_doc = (doc: ChapterDoc) =>
    new Chapter(doc.id,
      doc.openingId,
      doc.name)


  static make = (event: string, 
  opening: Opening) =>
    new Chapter(
      nextString(8),
      opening.id,
      event)

  constructor(readonly id: string,
    readonly openingId: string,
  readonly name: string) {

  }
}

export type OpeningWithChapters = [Opening, Array<Chapter>]
