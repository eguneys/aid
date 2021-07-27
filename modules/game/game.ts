import { UserId } from '../user/user';
import { nextString } from '../common/random';
import { Color } from './color';
import { Team, TeamId } from './team';
import { Pov } from './pov';

export class Game {

  static make = (aTeam: Team,
                 bTeam: Team) =>
    new Game(
      nextString(8),
      aTeam,
      bTeam)
  
  constructor(
    readonly id: GameId,
    readonly aTeam: Team,
    readonly bTeam: Team) {
  }

  teams: Array<Team> = [this.aTeam, this.bTeam];

  team(color: Color) {
    return color.fold(this.aTeam, this.bTeam);
  }

  teamById(teamId: TeamId): Maybe<Team> {
    return this.teams.find(_ => _.id === teamId);
  }

  fullIdOf(color: Color) {
    return `${this.id}${this.team(color).id}`;
  }

  teamIdPov(teamId: TeamId): Maybe<Pov> {
    let res = this.teamById(teamId)
    if (res) {
      return Pov.makeByTeam(this, res);
    }
  }

  get start() {
    return this
  }

  static takeGameId(fullId: string) {
    return fullId.substring(0, Game.gameIdSize);
  }

  static takeTeamId(fullId: string) {
    return fullId.substring(Game.gameIdSize, Game.gameIdSize + Game.teamIdSize);
  }

  static idRegex = /[\w-]{8}/;
  static validId(fullId: string) {
    return !!fullId.match(Game.idRegex)
  }


  static gameIdSize = 8
  static teamIdSize = 8
}

export type GameId = string
