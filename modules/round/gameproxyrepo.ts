import { Game, GameId } from '../game/game';
import { Team } from '../game/team';
import { Pov, TeamRef } from '../game/pov';
import RoundSocket from './roundsocket';


export default class GameProxyRepo {

  constructor(readonly roundSocket: RoundSocket) {
  }

  game(gameId: GameId): Fu<Maybe<Game>> {
    return this.roundSocket.getGame(gameId);
  }

  pov(fullId: GameId): Fu<Maybe<Pov>> {
    return this.povTRef(TeamRef.make(fullId))
  }

  povTRef(teamRef: TeamRef): Fu<Maybe<Pov>> {
    return this.game(teamRef.gameId)
      .then(game => {
        if (game) {
          return game.teamIdPov(teamRef.teamId)
        }
      })
        
  }
    

  
  
}
