import * as chest from '../';
import * as bson from './bson';
import { Game } from './game';
import { GameRepo } from './gamerepo';

export class Env {

  gameRepo: GameRepo
  
  constructor(
    readonly db: chest.db.Db) {

    this.gameRepo = new GameRepo(db.apply<Game>('game', bson.GameBSONHandler));

  }
  
}
