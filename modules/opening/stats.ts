import { nextString } from '../common'
import UserApi from '../user/userapi'
import User from '../user/user'
import { Coll } from '../db';
import { Fen, move_uci } from 'chesstwo'
import { ImportedGame } from './parser'

export type PosStat = {
  id: string,
  fen: Fen,
  nb_reached: number,
}

export type MoveStat = {
  id: string,
  before_pos_stat: string,
  uci: string,
  nb_made: number
}

export class Api {
  

  constructor(readonly repo: Repo,
    readonly userapi: UserApi) {
  }

  add_games(user: User, games: Array<ImportedGame>) {
    return Promise.all(games.map(_ => this.add_game(user, _)))
  }

  async add_game(user: User, game: ImportedGame) {

    let { fens, since } = game

    let res = []

    for (let [fen, qmoves] of fens) {
      let ps = this.statOrCreate(fen).then(stat =>  {
        if (!stat) {
          return Promise.reject()
        }
        return Promise.all(qmoves.map(qmove => 
          this.moveOrCreate(move_uci(qmove.move), stat.id)
        ))
      })
      res.push(ps)
    }

    await Promise.all(res)

    return await this.userapi.update_since_ifrecent(user, since)
  }

  async statOrCreate(fen: Fen) {

    let stat = await this.repo.byFen(fen)
    if (stat) {
      await this.repo.increment(stat.id)
    } else {
      await this.repo.insert({
        id: nextString(8),
        fen,
        nb_reached: 1
      })
    }
    return stat || this.repo.byFen(fen)

  }


  async moveOrCreate(uci: string, before_pos_stat: string) {
    let stat = await this.repo.byPosUci(before_pos_stat, uci)
    if (stat) {
      await this.repo.incrementMove(stat.id)
    }
    return stat || this.repo.insertMove({
      id: nextString(8),
      uci,
      before_pos_stat,
      nb_made: 1
    })
  }

}

export class Repo {

  constructor(readonly coll: Coll<PosStat>,
    readonly collm: Coll<MoveStat>) {
  }

  insert(stat: PosStat) {
    return this.coll.insert(stat)
  }

  increment(id: string) {
    return this.coll.increment(id, 'nb_reached')
  }

  incrementMove(id: string) {
    return this.collm.increment(id, 'nb_made')
  }

  insertMove(stat: MoveStat) {
    return this.collm.insert(stat)
  }

  byId(id: string) {
    return this.coll.one({ id })
  }

  byFen(fen: Fen) {
    return this.coll.one({ fen })
  }


  byPosUci(before_pos_stat: string, uci: string) {
    return this.collm.one({ before_pos_stat, uci })
  }


}

