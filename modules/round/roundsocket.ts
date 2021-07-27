import * as chest from '../';
import { GameRepo } from '../game/gamerepo';
import { Game, GameId } from '../game/game';
import { GetOrMakeMap } from '../hub/getormakemap';
import RoundActor from './roundactor';
import GameProxy from './gameproxy';

export default class RoundSocket {

  rounds: GetOrMakeMap<RoundActor>
  

  constructor(readonly gameRepo: GameRepo,
              readonly remoteSocketApi: chest.socket.RemoteSocket) {

    this.rounds = new GetOrMakeMap<RoundActor>({
      loader: id => {
        let proxy = new GameProxy(gameRepo, id)
        let actor = new RoundActor(
          proxy
        )
        return actor;
      }});
    
  }

  

  getGame(gameId: GameId): Fu<Maybe<Game>> {
    return this.rounds.get(gameId).getGame
  }
  
}
