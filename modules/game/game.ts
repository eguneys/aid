import { UserId } from '../user/user';
import { nextString } from '../common/random';
import { Color } from './color';
import { Team } from './team';

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

  team(color: Color) {
    return color.fold(this.aTeam, this.bTeam);
  }

  fullIdOf(color: Color) {
    return `${this.id}${this.team(color).id}`;
  }


  get start() {
    return this
  }
  
}

export type GameId = string
