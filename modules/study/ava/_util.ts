import { nt, uci, uc } from 'tschess';
import { NodeRoot, Node, NodeChildren } from '../node';

export function node(ply: number, uciS: string, san: string, children: NodeChildren = NodeChildren.empty) {
  let _uci = uci.str2uci(uciS)!
  return Node.make({
    id: uc.pair(_uci),
    fen: nt.initialFen,
    ply,
    move: uci.withSan(_uci, san),
    children
  });
}

export function children(...nodes: Array<Node>) {
  return NodeChildren.make(nodes);
}
