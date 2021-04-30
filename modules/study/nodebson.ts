import { Node, NodeRoot, NodeChildren } from './node';
import { nt, uc, uci } from 'tschess';
import Path, { rootDbKey } from './path';
import { reader, writer } from './flattree';
import { BSON } from '../db/bson';

export type RootOrNodeDoc = {
  ply: number,
  fen: nt.Fen
};

export type NodeDoc = RootOrNodeDoc & {
  uci: nt.UciOrCastles,
  san: nt.San,
};

export type RootDoc = RootOrNodeDoc & {
  
};

export type FlatNodeDoc = {
  [key in string]: NodeDoc
}

export type RootFullDoc = {
  [rootDbKey]: RootDoc;
  flat: FlatNodeDoc
};

export function readNode(doc: NodeDoc, id: uc.UciCharPair): Node {
  return Node.make({
    id,
    ply: doc.ply,
    move: uci.withSan(doc.uci, doc.san),
    fen: doc.fen,
    children: NodeChildren.empty
  })
}

export function writeNode(n: Node): NodeDoc {

  return {
    ply: n.ply,
    uci: n.move.uci,
    san: n.move.san,
    fen: n.fen
  };
  
}

export const nodeRootBsonHandler: BSON<NodeRoot> = {
  read(doc: RootFullDoc): NodeRoot {
    let rootNode = doc[rootDbKey];
    return NodeRoot.make({
      ply: rootNode.ply,
      fen: rootNode.fen,
      children: reader.rootChildren(doc.flat)
    });
  },

  write(root: NodeRoot): RootFullDoc {
    return {
      [rootDbKey]: {
        ply: root.ply,
        fen: root.fen
      },
      flat: writer.rootChildren(root)
    };
  }
}
    
