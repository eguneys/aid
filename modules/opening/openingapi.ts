import User from '../user/user'
import OpeningRepo from './openingrepo';
import { import_chapters } from './parser'
import Opening, { OpeningWithChapters } from './opening'

export default class OpeningApi {
  
  constructor(readonly repo: OpeningRepo) {
  }


  async opening_delete(id: string, user: User) {
    return this.repo.deleteOpeningOfUser(id, user)
  }

  async opening_with_chapters(id: string): Fu<Maybe<OpeningWithChapters>> {

    return this.repo.byId(id).then(op =>
      op ? this.repo.chaptersByOpening(id).then(chapters =>
        [op, chapters]) : undefined)

  }

  async byUser(user: User) {
    return this.repo.byUser(user)
  }


  async create_from_pgn(user: User, pgn: string) {

    let opening = Opening.make(
      'fill then',
      user.id)


    let chapters = import_chapters(opening, pgn)

    if (chapters.length === 0) {
      throw 'no chapters'
    }

    opening = Opening.make2(chapters[0].name, opening)

    return Promise.all(chapters.map(_ => this.repo.insertChapter(_)))
      .then(_ => this.repo.insert(opening).then(_ => opening))
  }
 
}
