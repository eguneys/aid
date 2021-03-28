import { nt } from 'nefs';
import { Api as FxApi } from 'ssehfx';
import { ck, db as ckdb, route } from 'caykahve';

export abstract class DropGame {
  abstract onPickup(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece): void;
  abstract onDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece): void;
  abstract canDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece): boolean;
}


export class NoDropGame extends DropGame {
  constructor() {
    super();
  }

  onPickup(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {}
  onDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {}
  canDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) { return false; }
  
}

export class OneDropGame extends DropGame {

  fxApi: FxApi

  constructor(fxApi: FxApi) {
    super();
    this.fxApi = fxApi;
  }

  onPickup(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {}
  
  onDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {
    route.pjroutes(ckdb.pieses.get(piece, pos)).forEach(pjroute => {
      let { orig, dest } = pjroute;
      this.fxApi?.displace({
        piece,
        orig,
        dest
      }, {
        wait: 0,
        repeat: 10,
        duration: 1000
      })
    });
  }

  canDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {
    let { board } = situation;

    return board.size === 0;
  }

}

export class SameDropGame extends DropGame {

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
    let cancels = [...route.pjroutes(ps)].map(pjroute => {
      let { orig, dest } = pjroute;
      return this.fxApi.displace({
        piece: ps.piece,
        orig,
        dest
      }, {
        wait: 0,
        repeat: 10,
        duration: 1000
      })
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

    return piece.color === situation.turn;
  }

}
