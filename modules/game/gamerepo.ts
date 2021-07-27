import { Coll } from '../db';
import { Game, GameId } from './game';

export class GameRepo {

  coll: Coll<Game>

  constructor(coll: Coll<Game>) {
    this.coll = coll;
  }

  insertDenormalized(game: Game) {
    return this.coll.insert(game);
  }
  
  game(id: GameId): Fu<Maybe<Game>> {
    return this.coll.one({id});
  }
  
}
