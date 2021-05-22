import { Fen, UciWithSan, uc } from 'chesst';

export type RootOrNodeOptions = {
  ply: number,
  fen: Fen,
  children: NodeChildren
}

export type NodeOptions = RootOrNodeOptions & {
  id: uc.UciCharPair,
  move: UciWithSan
}

export type RootOptions = RootOrNodeOptions & {
}

export abstract class RootOrNode {

  ply: number
  fen: Fen
  children: NodeChildren

  get opts(): RootOrNodeOptions {
    return {
      ply: this.ply,
      fen: this.fen,
      children: this.children
    };
  }

  constructor(opts: RootOrNodeOptions) {

    this.ply = opts.ply;
    this.fen = opts.fen;
    this.children = opts.children;
    
  }
  
}

export class Node extends RootOrNode {

  static make = (opts: NodeOptions): Node => new Node(opts);
  
  id: uc.UciCharPair
  move: UciWithSan

  get opts(): NodeOptions {
    return {
      ...super.opts,
      id: this.id,
      move: this.move
    };
  }
  
  constructor(opts: NodeOptions) {
    super(opts);

    this.id = opts.id;
    this.move = opts.move;
  }


  merge(n: Node): Node {
    return Node.make({
      ...this.opts,
      children: n.children.nodes.reduce((cs, c) =>
        cs.addNode(c), this.children)
    });
  }
  
}

export class NodeChildren {

  static empty: NodeChildren = new NodeChildren([])

  static make = (nodes: Array<Node>): NodeChildren => new NodeChildren(nodes);

  nodes: Array<Node>

  constructor(nodes: Array<Node>) {
    this.nodes = nodes;
  }

  addNode(node: Node): NodeChildren {
    let prev = this.get(node.id);

    if (!prev) {
      return NodeChildren.make([...this.nodes, node]);
    } else {
      return NodeChildren.make([
        ...this.nodes.filter(_ => _.id !== node.id),
        prev.merge(node)
      ]);
    }
  }

  get(id: uc.UciCharPair): Maybe<Node> {
    return this.nodes.find(_ => _.id === id);
  }
  
}

export class NodeRoot extends RootOrNode {

  static make = (opts: RootOptions): NodeRoot => new NodeRoot(opts);
  
  static fromFen = (fen: Fen): NodeRoot => new NodeRoot({
    ply: 0,
    fen,
    children: NodeChildren.empty
  });

  constructor(opts: RootOptions) {
    super(opts);
  }
  
}
