import { PoolApi } from '../pool/poolapi';
import MatchTrouper from './matchtrouper';

export default class MatchmakerActor {

  static start = (poolApi: PoolApi) => {
    let res = new MatchmakerActor(poolApi);

    setTimeout(() =>
      setInterval(res.tick, 2000), 7000);
      
    
    return res;
  }

  socket!: MatchTrouper
  
  constructor(readonly poolApi: PoolApi) {
    
  }


  setSocket(socket: MatchTrouper) {
    this.socket = socket;
  }
  
  tick = () => {
    let sries = this.socket.getSrisP();

    this.poolApi.socketIds(sries);
  }
  
}
