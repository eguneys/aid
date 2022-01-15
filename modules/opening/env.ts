import * as chest from '../';
import UserRepo from '../user/userrepo';
import OpeningApi from './openingapi'
import OpeningRepo from './openingrepo'
import Opening, { Chapter } from './opening'
import * as bson from './bson';

export class Env {

  api: OpeningApi
  repo: OpeningRepo

  constructor(readonly db: chest.db.Db,
    readonly lila: chest.lila.Env) {

    this.repo = new OpeningRepo(
      db.apply<Opening>('opening', bson.OpeningBsonHandler),
      db.apply<Chapter>('chapter', bson.ChapterBsonHandler)
    )
    this.api = new OpeningApi(this.repo, lila)
  }

  
  
}
