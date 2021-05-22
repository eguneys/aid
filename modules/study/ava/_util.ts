import { initial, uc, Uci, uciOrCastles, sanOrCastles } from 'chesst';
import { NodeRoot, Node, NodeChildren } from '../node';

export function node(ply: number, uciS: string, sanS: string, children: NodeChildren = NodeChildren.empty) {
  let _uci = uciOrCastles(uciS)!
  let _san = sanOrCastles(sanS)!;
  return Node.make({
    id: uc.uci(_uci),
    fen: initial,
    ply,
    move: Uci.withSan(_uci, _san),
    children
  });
}

export function children(...nodes: Array<Node>) {
  return NodeChildren.make(nodes);
}
