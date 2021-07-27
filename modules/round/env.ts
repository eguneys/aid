import * as chest from '../';
import { GameRepo } from '../game/gamerepo';
import GameProxyRepo from './gameproxyrepo';
import RoundSocket from './roundsocket';
import JsonView from './jsonView';
import LightUserApi from '../user/lightuserapi';

export class Env {

  roundSocket: RoundSocket
  proxyRepo: GameProxyRepo
  jsonView: JsonView
  
  constructor(
    readonly lightUserApi: LightUserApi,
    readonly gameRepo: GameRepo,
    readonly remoteSocketApi: chest.socket.RemoteSocket) {

    this.roundSocket =
      new RoundSocket(gameRepo,
                      remoteSocketApi)

    this.proxyRepo =
      new GameProxyRepo(this.roundSocket);

    this.jsonView = new JsonView(lightUserApi);
    
  }
  
}
