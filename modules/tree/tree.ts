import { Fen, UciWithSan, uc } from 'chesst';

function nodeListJsonWriter(alwaysChildren: boolean) {
  return {
    write(list: Array<Node>) {
      let writer = alwaysChildren ? Node.defaultNodeJsonWriter :
        Node.minimalNodeJsonWriter;
      return list.map(writer.write);
    }
  }
}

function makeNodeJsonWriter(alwaysChildren = false) {
  return {
    write(node: Node) {
      try {
        let res: any = {
          ply: node.ply,
          fen: node.fen,
        };

        if (node.idOption) {
          res.id = node.idOption;
        }
        if (node.moveOption) {
          res.uci = node.moveOption.uci;
        }

        if (alwaysChildren || node.children.length !== 0) {
          res.children = nodeListJsonWriter(true).write(node.children)
        }

        return res;
      } catch (e) {
        console.error(e.stack);
      }
    }
  }
}

export abstract class Node {

  static defaultNodeJsonWriter = makeNodeJsonWriter(true);
  static minimalNodeJsonWriter = makeNodeJsonWriter(false);
  
  static partitionTreeJsonWriter = {
    write(node: Node) {
      return node.mainlineNodeList.map(Node.minimalNodeJsonWriter.write)
    }
  };

  abstract idOption: Maybe<string>
  abstract moveOption: Maybe<UciWithSan>

  abstract dropFirstChild: Node;

  get mainlineNodeList(): Array<Node> {
    let rest = this.children[0]?
      this.children[0].mainlineNodeList:
      [];

    return [this.dropFirstChild, ...rest];
  }
  
  constructor(readonly ply: number,
              readonly fen: Fen,
              readonly children: Array<Branch>) {
    
  }
}

export class Root extends Node {

  static make = (opts: any): Root =>
    new Root(opts.ply,
             opts.fen,
             opts.children);

  idOption = undefined;
  moveOption = undefined;

  get dropFirstChild(): Node {

    let children = this.children.length === 0 ?
      this.children.slice(0) :
      this.children.slice(1);

    return this.copyChildren(children);
  }
  
  constructor(ply: number,
              fen: Fen,
              children: Array<Branch>) {
    super(ply, fen, children);
  }

  copyChildren(children: Array<Branch>) {
    return new Root(this.ply,
                    this.fen,
                    children);
  }
  
}

export class Branch extends Node {

  static make = (opts: any): Branch =>
    new Branch(opts.id,
             opts.move,
             opts.ply,
             opts.fen,
             opts.children);
  
  id: uc.UciCharPair;
  move: UciWithSan;

  get idOption() { return this.id };
  get moveOption() { return this.move };

  get dropFirstChild(): Node {

    let children = this.children.length === 0 ?
      this.children.slice(0) :
      this.children.slice(1);

    return this.copyChildren(children);
  }
  
  constructor(id: uc.UciCharPair,
              move: UciWithSan,
              ply: number,
              fen: Fen,
              children: Array<Branch>) {
    super(ply, fen, children);
    this.id = id;
    this.move = move;
  }

  copyChildren(children: Array<Branch>) {
    return new Branch(this.id,
                      this.move,
                      this.ply,
                      this.fen,
                      children);
  }
  
  
}
