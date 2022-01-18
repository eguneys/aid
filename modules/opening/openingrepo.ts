import { Coll } from '../db';
import Opening, { flat_vec2map, Chapter } from './opening';
import { BSON } from '../db/bson';
import User from '../user/user'
import { flat, flat_root, FRoot } from 'chesstwo'
import { MoveNode, MoveRoot } from './node'

export default class OpeningRepo {

  
  constructor(readonly coll: Coll<Opening>,
    readonly ccoll: Coll<Chapter>) {
  }

  deleteOpeningOfUser(id: string, user: User) {
    return Promise.all([this.coll.delete(id),
      this.ccoll.deleteByQuery({openingId: id})
    ])

  }

  insert(opening: Opening) {
    return this.coll.insert(opening)
  }

  insertChapter(chapter: Chapter) {
    return this.ccoll.insert(chapter)
  }
  

  byId(id: string) {
    return this.coll.one({ id })
  }


  byUser(user: User) {
    return this.coll.find({
      userId: user.id
    }) 
  }

  chaptersByOpening(openingId: string) {
    return this.ccoll.find({
      openingId
    })
  }


  updateRoot(chapterId: string, _root: FRoot<MoveNode, MoveRoot>) {

    let _froot = flat<MoveNode, MoveRoot>(_root)
    let root = flat_vec2map(_froot)
    return this.ccoll.updateById(chapterId, { root })
  }
}
