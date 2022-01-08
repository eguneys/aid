import { nextString } from 'domnar'
import { ChapterDoc, OpeningDoc } from './bson'
import { UserId } from '../user/user'
import { flat_root, FRoot } from 'chesstwo'
import { MoveRoot, MoveNode } from './node'

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

const fn_json_read = (str: string) => JSON.parse(str)

export class Chapter {

  static from_doc = (doc: ChapterDoc) =>
    new Chapter(doc.id,
      doc.openingId,
      doc.name,
      flat_root(doc.root, fn_json_read, fn_json_read))

  static make = (event: string, 
    opening: Opening,
    root: FRoot<MoveNode, MoveRoot>
    ) =>
    new Chapter(
      nextString(8),
      opening.id,
      event,
      root)

  constructor(readonly id: string,
    readonly openingId: string,
    readonly name: string,
    readonly root: FRoot<MoveNode, MoveRoot>
    ) {

  }
}

export type OpeningWithChapters = [Opening, Array<Chapter>]
