import * as chest from '../';
import { PoolApi } from './poolapi';
import { PoolList } from './poolconfig';
import { GameStarter } from './gamestarter';

export class Env {

  api: PoolApi
  gameStarter: GameStarter
  
  constructor(readonly userRepo: chest.user.UserRepo,
              readonly gameRepo: chest.game.GameRepo) {

    let poolConfigs = PoolList.all

    this.gameStarter = new GameStarter(gameRepo,
                                      userRepo);
    
    this.api = new PoolApi(poolConfigs,
                           this.gameStarter)
    
  }
  
}
