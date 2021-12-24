import User from '../user/user'
import OpeningRepo from './openingrepo';
import { import_chapters } from './parser'
import Opening from './opening'

export default class OpeningApi {
  
  constructor(readonly repo: OpeningRepo) {
  }


  async byUser(user: User) {
    return this.repo.byUser(user)
  }


  async create_from_pgn(user: User, pgn: string) {

    let chapters = import_chapters(pgn)

    if (chapters.length === 0) {
      throw 'no chapters'
    }

    let opening = Opening.make(
      chapters[0].name,
      user.id)

    return this.repo.insert(opening).then(_ => opening)
  }
 
}
