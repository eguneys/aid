import * as chest from '../';
import MatchmakerSocket from './matchmakersocket';
import MatchmakerActor from './matchmakeractor';
import { SocketVersion, RemoteSocket } from '../socket';
import { PoolApi } from '../pool/poolapi';

export class Env {

  actor: MatchmakerActor
  socket: MatchmakerSocket
  
  constructor(readonly db: chest.db.Db,
              readonly remoteSocketApi: RemoteSocket,
              readonly poolApi: PoolApi) {


    this.actor = MatchmakerActor.start(this.poolApi)

    this.socket = new MatchmakerSocket(this.remoteSocketApi,
                                       this.actor,
                                       this.poolApi);

    
    
  }
  
}
