import { PoolConfig, PoolConfigId } from './poolconfig';
import { PoolActor } from './poolactor';
import { GameStarter } from './gamestarter';
import { SocketSri } from '../socket/socket';
import { Game } from '../game/game';

export class PoolApi {

  actors: Map<PoolConfigId, PoolActor>
  
  constructor(readonly configs: Array<PoolConfig>,
              readonly gameStarter: GameStarter) {

    this.actors = new Map(configs.map(config => [
      config.id,
      PoolActor.make(config, gameStarter)
    ]))
    
  }
}

export class Pairing {

  static make = (game: Game,
                 aSries: Array<SocketSri>,
                 bSries: Array<SocketSri>) => new Pairing(game,
                                                         aSries,
                                                         bSries)
  
  constructor(readonly game: Game,
              aSries: Array<SocketSri>,
              bSries: Array<SocketSri>) {
  }
}
