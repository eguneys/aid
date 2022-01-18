import { nextString } from '../common'
import UserApi from '../user/userapi'
import User from '../user/user'
import { Coll } from '../db';
import { Fen, move_uci } from 'chesstwo'
import { ImportedGame } from './parser'
import { Chapter } from './opening'

import { map, FNode, FRoot } from 'chesstwo'
import { MoveNode, MoveRoot } from './node'

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


  async chapter_stats(chapter: Chapter, games: Array<ImportedGame>) {
    return map(chapter.root, (node: MoveNode) => {
      games.forEach(game => {

        let pos_stat = game.fens.get(node.fen_before)

        if (pos_stat) {

          let move_stat = pos_stat.filter(_ => {
            return move_uci(_.move) === node.uci
          })[0]

          let nb_made = move_stat ? 1 : 0
          let nb_reached = 1 


          node.nb_made += nb_made
          node.nb_reached += nb_reached
        }
      })
      return node
    }, (root: MoveRoot) => {
      return root
    })
  }


  async add_games(user: User, games: Array<ImportedGame>) {
    // TODO delete definitions below 
    //await Promise.all(games.map(_ => this.add_game(user, _)))
    if (games[0]) {
      let { since } = games[0]

      return [await this.userapi.update_since_ifrecent(user, since),
        games.length]
    }
  }

  async add_game(user: User, game: ImportedGame) {

    let { fens } = game

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

