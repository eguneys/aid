import { Coll } from '../db';
import Opening, { Chapter } from './opening';
import { BSON } from '../db/bson';
import User from '../user/user'

export default class OpeningRepo {

  
  constructor(readonly coll: Coll<Opening>,
    readonly ccoll: Coll<Chapter>) {
  }

  deleteOpeningOfUser(id: string, user: User) {
    return this.coll.delete(id)
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
}
