import { Node, NodeRoot, NodeChildren } from './node';
import * as tree from '../tree';

export default class TreeBuilder {

  static make = (root: NodeRoot): tree.Root => {
    return TreeBuilder.makeRoot(root);
  };

  static toBranch = (node: Node): tree.Branch => {
    return tree.Branch.make({
      id: node.id,
      ply: node.ply,
      move: node.move,
      fen: node.fen,
      children: TreeBuilder.toBranches(node.children)
    });
  };

  static makeRoot = (root: NodeRoot): tree.Root => {
    return tree.Root.make({
      ply: root.ply,
      fen: root.fen,
      children: TreeBuilder.toBranches(root.children)
    });
  }
  
  static toBranches = (children: NodeChildren): Array<tree.Branch> => {
    return children.nodes.map(_ => TreeBuilder.toBranch(_))
  };

}
