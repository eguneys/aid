import { nextString } from 'domnar'
import * as chest from '../'
import User from '../user/user'
import OpeningRepo from './openingrepo';
import { import_chapters, import_games } from './parser'
import Opening, { OpeningWithChapters } from './opening'
import { Api as OpeningStats } from './stats'

export default class OpeningApi {
  
  constructor(readonly repo: OpeningRepo,
    readonly stats: OpeningStats,
    readonly lila: chest.lila.Env) {
  }

  async opening_reset_progress(user: User, id: string) {

    let opchapters = await this.opening_with_chapters(id)
    if (opchapters) {
      let [op, chapters] = opchapters
      await Promise.all(chapters.map(async chapter =>  {
        let new_root = await this.stats.reset_chapter_stats(chapter)

        await this.repo.updateRoot(chapter.id, new_root)
      }))
    }

  }

  async opening_refresh_games(user: User, id: string) {
    let games = await this.lila.games.get_games(user)
    let imported_games = import_games(games)
    let res = await this.stats.add_games(user, imported_games) 

    if (res && res[1] > 0) {

      let openings = await this.repo.byUser(user)

      await Promise.all(openings.map(async opening => {
        let opchapters = await this.opening_with_chapters(opening.id)
        if (opchapters) {
          let [op, chapters] = opchapters
          await Promise.all(chapters.map(async chapter =>  {
            let new_root = await this.stats.chapter_stats(chapter, imported_games)

            await this.repo.updateRoot(chapter.id, new_root)
          }))
        }
      }))
    }
    return res
  }

  async opening_delete(id: string, user: User) {
    return this.repo.deleteOpeningOfUser(id, user)
  }

  async opening_with_chapters(id: string): Fu<Maybe<OpeningWithChapters>> {

    return this.repo.byId(id).then(op =>
      op ? this.repo.chaptersByOpening(id).then(chapters =>
        [op, chapters]) : undefined)

  }

  async opening_byid(id: string) {
    return this.repo.byId(id)
  }

  async byUser(user: User) {
    return this.repo.byUser(user)
  }


  async create_from_pgn(user: User, studyId: string, pgn: string, id?: string) {

    let opening = Opening.make(
      id || nextString(8),
      'opening name, fill then',
      user.id,
      studyId)


    let chapters = import_chapters(opening, pgn)

    if (chapters.length === 0) {
      throw 'no chapters'
    }

    opening = Opening.make2(chapters[0].name, opening)

    return Promise.all(chapters.map(_ => this.repo.insertChapter(_)))
      .then(_ => this.repo.insert(opening).then(_ => opening))
  }
 
}
