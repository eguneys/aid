import { MatchmakerOptions } from './interfaces';
import { PoolMember } from 'shared_options';
import MatchSocket from './socket';

export default class MatchCtrl {

  static make = (opts: MatchmakerOptions,
                 redraw: Redraw) => new MatchCtrl(opts, redraw);

  poolMember?: PoolMember
  socket: MatchSocket

  poolSize: number = 0
  
  constructor(readonly opts: MatchmakerOptions,
              readonly redraw: Redraw) {


    this.socket = new MatchSocket(opts.socketSend,r
                                  this);
    
  }

  clickPool = (id: string) => {
    if (this.poolMember && this.poolMember.id === id) {
      this.leavePool();
    } else {
      this.enterPool({ id });
    }    
  }

  enterPool = (member: PoolMember) => {
    this.poolMember = member;
    this.poolIn();
    this.redraw();
  };

  leavePool = () => {
    if (!this.poolMember) return;
    this.socket.poolOut(this.poolMember);
    this.poolMember = undefined;
    this.redraw();
  };

  poolIn = () => {
    if (!this.poolMember) return;
    this.socket.poolIn(this.poolMember);    
  };

  setRedirecting = () => {
  };

  poolSpread = (nb: number) => {
    this.poolSize = nb;
  };
  
}
