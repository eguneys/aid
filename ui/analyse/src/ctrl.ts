import * as cs from 'chesst';
import { AnalyseOptions, AnalyseData } from 'shared_options';
import { AnalyseOptionsPlus } from './interfaces';
import { Api as DoApi } from 'dochess';
import { make as makeSocket, Socket } from './socket';
import { path as treePath, ops as treeOps, TreeWrapper } from 'tree';
import * as util from './util';

export default class Ctrl {

  data: AnalyseData;
  doApi!: DoApi

  tree!: TreeWrapper;
  socket!: Socket;
  
  node!: Tree.Node;
  path!: Tree.Path;
  nodeList!: Tree.Node[];

  initialPath!: Tree.Path;
  
  resolveAnaMove: Maybe<(fen: cs.Fen) => void>;
  
  constructor(readonly opts: AnalyseOptionsPlus, readonly redraw: Redraw) {
    this.data = opts.data;
    this.redraw = redraw;

    this.initialize(this.data);
    this.initialPath = treePath.root;
    
    this.setPath(this.initialPath);
  }

  initialize(data: AnalyseData) {
    this.data = data;
    this.tree = TreeWrapper.make(util.treeReconstruct(this.data.treeParts));

    this.socket = makeSocket(this.opts.socketSend, this);
  }

  private setPath = (path: Tree.Path): void => {
    this.path = path;
    this.nodeList = this.tree.getNodeList(path);
    this.node = treeOps.first(this.nodeList)!;
  };


  userMove = (uciS: string, fen: cs.Fen) => {
    return this.sendMove(uciS);
  }

  awaitAnaMove = () => {
    return new Promise<cs.Fen>(resolve => {
      this.resolveAnaMove = resolve;
    }).then(_ => {
      this.resolveAnaMove = undefined;
      return _;
    });
  };

  sendMove(uciS: string) {
    const move: any = {
      uci: uciS,
      fen: this.node.fen,
      path: this.path
    };

    this.socket.sendAnaMove(move);
    this.redraw();

    return this.awaitAnaMove();
  }
  
  setDochess(doApi: DoApi) {
    this.doApi = doApi;
  }
  
  
}
