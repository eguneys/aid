import { nextString } from 'domnar'
import { ChapterDoc, OpeningDoc } from './bson'
import { UserId } from '../user/user'


export default class Opening {

  static make = (name: string,
  userId: UserId) =>
    new Opening(nextString(8),
      userId,
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
    doc.name)


  static make = (event: string) =>
    new Chapter(
      nextString(8),
      event)

  constructor(readonly id: string,
  readonly name: string) {

  }
}
