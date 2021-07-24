import { nextString } from '../common/random';
import { UserId } from '../user/user';
import { Color } from './color';




export class Player {

  static make = (color: Color,
                 userId: Maybe<UserId>) =>
    new Player(nextString(8),
               color,
               userId);
  
  constructor(readonly id: PlayerId,
              readonly color: Color,
              readonly userId: Maybe<UserId>) {
  }
  
}

export type PlayerId = string
