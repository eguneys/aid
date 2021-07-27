import { GameRepo } from '../game/gamerepo';
import { Game, GameId } from '../game/game';

export default class GameProxy {

  cache: Fu<Maybe<Game>> = this.fetch

  get fetch() {
    return this.gameRepo.game(this.id)
  }
  
  constructor(readonly gameRepo: GameRepo,
              readonly id: GameId) {
    
  }
  
  get game() {
    return this.cache;
  }
  
}
