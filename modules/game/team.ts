import { nextString } from '../common/random';
import { Player } from './player';
import { Color } from './color';

export class Team {

  static make = (color: Color,
                 players: Array<Player>) =>
    new Team(nextString(8),
             color,
             players);
  
  constructor(readonly id: TeamId,
              readonly color: Color,
              readonly players: Array<Player>) {
  }
  
}

export type TeamId = string
