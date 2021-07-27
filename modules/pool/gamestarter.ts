import * as chest from '../';
import { UserId } from '../user/user';
import UserRepo from '../user/userrepo';
import { GameRepo } from '../game/gamerepo';
import { Couple } from './matchmaking';
import { PoolConfig} from './poolconfig';
import { Pairing } from './poolapi';
import { Game } from '../game/game';
import { Team } from '../game/team';
import { Player } from '../game/player';
import { Color } from '../game/color';

export class GameStarter {

  constructor(
    readonly gameRepo: GameRepo,
    readonly userRepo: UserRepo) {
  }

  apply(pool: PoolConfig,
        couples: Array<Couple>) {

    Promise.all(couples.map(_ => this.one(pool, _)))
      .then(pairings =>
        chest.common.bus.publish('poolPairings', pairings))
  }

  async one(pool: PoolConfig, couple: Couple) {
    let game = this.makeGame(pool,
                        couple.a.map(_ => _.userId),
                        couple.b.map(_ => _.userId)).start

    await this.gameRepo.insertDenormalized(game)
    return Pairing.make(game,
                        couple.a.map(_ => _.sri),
                        couple.b.map(_ => _.sri))
  }

  makeGame(pool: PoolConfig,
           aUsers: Array<UserId>,
           bUsers: Array<UserId>) {

    return Game.make(Team.make(Color.a,
                               aUsers.map(userId =>
                                 Player.make(Color.a, userId))),
                     Team.make(Color.b,
                               bUsers.map(userId =>
                                 Player.make(Color.b, userId))));
  }
  
}
