import { UserId } from '../user/user';
import UserRepo from '../user/userrepo';
import { Couple } from './matchmaking';
import { PoolConfig} from './poolconfig';
import { Pairing } from './poolapi';
import { Game } from '../game/game';

export class GameStarter {

  constructor(
    readonly userRepo: UserRepo) {
  }

  apply(pool: PoolConfig,
        couples: Array<Couple>) {

    Promise.all(couples.map(_ => this.one(pool, _)))
      .then(pairings => console.log(pairings))
  }

  async one(pool: PoolConfig, couple: Couple) {
    let game = this.makeGame(pool,
                        couple.a.map(_ => _.userId),
                        couple.b.map(_ => _.userId)).start

    //await gameRepo.insertDenormalized(game)
    return Pairing.make(game,
                        couple.a.map(_ => _.sri),
                        couple.b.map(_ => _.sri))
  }

  makeGame(pool: PoolConfig,
           aUsers: Array<UserId>,
           bUsers: Array<UserId>) {
    return Game.make(aUsers,
                     bUsers);
  }
  
}
