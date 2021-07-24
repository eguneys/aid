import { PoolConfig, PoolConfigId } from './poolconfig';
import { PoolActor } from './poolactor';
import { PoolMember } from './poolmember';
import { GameStarter } from './gamestarter';
import { UserId } from '../user/user';
import { SocketSri } from '../socket/socket';
import { Game } from '../game/game';
import { Color } from '../game/color';

export class PoolApi {

  actors: Map<PoolConfigId, PoolActor>
  
  constructor(readonly configs: Array<PoolConfig>,
              readonly gameStarter: GameStarter) {

    this.actors = new Map(configs.map(config => [
      config.id,
      PoolActor.make(config, gameStarter)
    ]))
    
  }


  join(poolId: PoolConfigId, joiner: Joiner) {
    [...this.actors.entries()].forEach(([id, actor]) => {
      if (id === poolId) {
        actor.join(joiner);
      } else {
        actor.leave(joiner.userId)
      }
    })
  }

  leave(poolId: PoolConfigId, userId: UserId) {
    this.actors.get(poolId)?.leave(userId)
  }


  socketIds(ids: Array<SocketSri>) {
    for (let actor of this.actors.values()) {
      actor.sries(ids)
    }
  }
  
}

export class Joiner {

  constructor(readonly userId: UserId,
              readonly sri: SocketSri,
              readonly rating: number) {
    
  }

  is(member: PoolMember) {
    return this.userId === member.userId
  }
  
}

export class Pairing {

  static make = (game: Game,
                 aSries: Array<SocketSri>,
                 bSries: Array<SocketSri>) => new Pairing(game,
                                                         aSries,
                                                         bSries)
  
  constructor(readonly game: Game,
              readonly aSries: Array<SocketSri>,
              readonly bSries: Array<SocketSri>) {
  }

  sries(color: Color): Array<SocketSri> {
    return color.fold(this.aSries, this.bSries);
  }
}
