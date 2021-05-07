import { nt } from 'nefs';
import { DropGame } from './drop';
import { Api as FxApi } from 'ssehfx';
import { g, ck, db as ckdb, route, visit } from 'caykahve';


export default class PathDropGame extends DropGame {

  fxApi: FxApi
  psqueue: Array<ck.Piese>
  cancels: Map<ck.Piese, any>

  constructor(fxApi: FxApi) {
    super();
    this.fxApi = fxApi;
    this.psqueue = [];
    this.cancels = new Map();
  }

  showPath(path: g.Path<route.ProjectedRoute>,
           piece: nt.Piece) {
    path.forEach(route => {
      let { orig, dest } = route;

      this.fxApi.displace({
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

  onPickup(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {
    
  }
  onDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {
    if (situation.board.size === 2) {
      let orig = [...situation.board.keys()].filter(_ => _!== pos)[0],
      dest = pos;

      let paths = visit.paths(piece, orig, dest);

      if (paths) {
        if (paths.length > 0) {
          this.showPath(paths[0], piece);
        }
      }


    }
  }
  canDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) { 
    let { board } = situation;

    if (board.size === 0) {
      return true;
    }
    if (board.size === 1) {
      let bpiece = [...board.values()][0];
      return bpiece === piece;
    }
    return false;
  }
  
}
