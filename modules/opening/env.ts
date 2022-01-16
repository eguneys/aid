import * as chest from '../';
import UserRepo from '../user/userrepo';
import OpeningApi from './openingapi'
import OpeningRepo from './openingrepo'
import Opening, { Chapter } from './opening'
import { Api as OpeningStats, Repo as StatsRepo, MoveStat, PosStat } from './stats'
import * as bson from './bson';

export class Env {

  api: OpeningApi
  repo: OpeningRepo
  stats: OpeningStats

  constructor(readonly db: chest.db.Db,
    readonly user: chest.user.Env,
    readonly lila: chest.lila.Env) {

    this.repo = new OpeningRepo(
      db.apply<Opening>('opening', bson.OpeningBsonHandler),
      db.apply<Chapter>('chapter', bson.ChapterBsonHandler)
    )

    this.stats = new OpeningStats(new StatsRepo(
      db.apply<PosStat>('pos'),
      db.apply<MoveStat>('move'),
    ), user.api)

    this.api = new OpeningApi(this.repo, this.stats, lila)
  }

  
  
}
