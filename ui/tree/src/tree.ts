import * as treePath from './path';
import * as ops from './ops';

export default class TreeWrapper {

  static make = (root: Tree.Node) => new TreeWrapper(root);
  
  root: Tree.Node;

  constructor(root: Tree.Node) {
    this.root = root;
  }
  
  getNodeList(path: Tree.Path): Tree.Node[] {
    return ops.collect(this.root, function(node: Tree.Node) {
      const id = treePath.head(path);
      if (id === '') return;
      path = treePath.tail(path);
      return ops.childById(node, id);
    });
  }
}
