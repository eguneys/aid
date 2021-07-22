import * as chest from '../';
import MatchmakerSocket from './matchmakersocket';
import { SocketVersion, RemoteSocket } from '../socket';

export class Env {

  socket: MatchmakerSocket
  
  constructor(readonly db: chest.db.Db,
              readonly remoteSocketApi: RemoteSocket) {



    this.socket = new MatchmakerSocket(this.remoteSocketApi);
    
    
    
  }
  
}
