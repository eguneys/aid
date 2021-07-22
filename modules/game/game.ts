import { UserId } from '../user/user';

export class Game {

  static make = (aUsers: Array<UserId>,
                 bUsers: Array<UserId>) => new Game(aUsers,
                                                    bUsers)
  
  constructor(readonly aUsers: Array<UserId>,
              readonly bUsers: Array<UserId>) {
    
  }


  get start() {
    return this
  }
  
}
