import { nt } from 'nefs';
import { DropGame } from './drop';
import { Api as FxApi } from 'ssehfx';
import { ck, db as ckdb, route } from 'caykahve';


export class DestDropGame extends DropGame {

  fxApi: FxApi
  psqueue: Array<ck.Piese>
  cancels: Map<ck.Piese, any>

  constructor(fxApi: FxApi) {
    super();
    this.fxApi = fxApi;
    this.psqueue = [];
    this.cancels = new Map();
  }

  showPiese(ps: ck.Piese) {
    let cancels = [...route.pjdest(ps.piece, ps.pos)].map(pjdest => {
      let { orig, dest } = pjdest;

      return this.fxApi.displace({
        piece: ps.piece,
        orig,
        dest
      }, {
        wait: 0,
        repeat: 10,
        duration: 1000
      });
    });
    this.cancels.set(ps, cancels);
  }

  onPickup(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {
    let piese = ckdb.pieses.get(piece, pos)
    let nqueue = this.psqueue.filter(_ => _ !== piese);
    if (nqueue.length < this.psqueue.length) {
      let cancels = this.cancels.get(piese);
      if (cancels) {
        this.cancels.delete(piese);
        this.fxApi.cancel(cancels);
      }
    }

    if (nqueue.length > 0 && nqueue[0] !== this.psqueue[0]) {
      this.showPiese(nqueue[0]);
    }
    this.psqueue = nqueue;
  }
  onDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {
    let piese = ckdb.pieses.get(piece, pos);
    this.psqueue.push(piese);
    if (this.psqueue.length === 1) {
      this.showPiese(piese)
    }
  }
  canDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) { 
    let { board } = situation;
    return board.size === 0;
  }
  
}
