import { Color } from './color';
import { Game, GameId } from './game';
import { Team, TeamId } from './team';

export class Pov {

  static makeByTeam =(game: Game, team: Team) =>
    new Pov(game, team.color)

  constructor(readonly game: Game,
              readonly color: Color) {
    
  }
}

export class TeamRef {

  static make = (fullId: string) =>
    new TeamRef(Game.takeGameId(fullId),
                  Game.takeTeamId(fullId))
  
  constructor(readonly gameId: GameId,
              readonly teamId: TeamId) {}
  
}
