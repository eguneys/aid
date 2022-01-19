import { nextString } from 'domnar'
import { ChapterDoc, OpeningDoc, FlatRoot } from './bson'
import { UserId } from '../user/user'
import { pretty, flat_root, FRoot, Path } from 'chesstwo'
import { MoveRoot, MoveNode } from './node'

export default class Opening {

  static make = (
    id: string,
    name: string,
    userId: UserId,
    studyId: string,
  ) =>
    new Opening(id,
      userId,
      name,
      studyId)

  static make2 = (name: string,
    opening: Opening) =>
    new Opening(opening.id,
      opening.userId,
      name,
      opening.studyId)

  static from_doc = (doc: OpeningDoc) =>
    new Opening(doc.id,
      doc.userId,
      doc.name,
      doc.studyId)

  constructor(readonly id: string,
    readonly userId: UserId,
    readonly name: string,
    readonly studyId: string) {
  }
}

export function flat_vec2map<A>(vec: Array<[Path, A]>) {
  let res: any = {}
  vec.forEach(([path, _]) => res[path] = _)
  return res
}

export function flat_map2vec(obj: FlatRoot) {
  let res: any = []
  for (let key in obj) {
    res.push([key, obj[key]])
  }
  return res
}



export class Chapter {

  static from_doc = (doc: ChapterDoc) =>
    new Chapter(doc.id,
      doc.openingId,
      doc.name,
      flat_root(flat_map2vec(doc.root)),
      doc.site)

  static make = (event: string, 
    opening: Opening,
    root: FRoot<MoveNode, MoveRoot>,
    site?: string
    ) =>
    new Chapter(
      nextString(8),
      opening.id,
      event,
      root,
      site)

  constructor(readonly id: string,
    readonly openingId: string,
    readonly name: string,
    readonly root: FRoot<MoveNode, MoveRoot>,
    readonly site?: string) {
  }
}

export type OpeningWithChapters = [Opening, Array<Chapter>]
