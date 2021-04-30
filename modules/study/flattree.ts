import { Node, NodeRoot, NodeChildren } from './node';
import { FlatNodeDoc, NodeDoc, writeNode, readNode } from './nodebson';
import Path, { encodeDbKey, fromDbKey } from './path';
import { MapVal } from 'shared_common';

class FlatNode {

  static make = (path: Path, data: NodeDoc): FlatNode =>
    new FlatNode(path, data);
  
  path: Path
  data: NodeDoc

  get depth(): number {
    return this.path.ids.length;
  }
  
  constructor(path: Path, data: NodeDoc) {
    this.path = path;
    this.data = data;
  }

  toNodeWithChildren(children: Maybe<NodeChildren>): Node {
    let res = readNode(this.data, this.path.ids[this.path.ids.length - 1])
    res.children = children || NodeChildren.empty;
    return res;
  }
  
}

export class reader {
  static rootChildren = (flatTree: FlatNodeDoc): NodeChildren => {

    let flatNodes = [];

    for (let key in flatTree) {
      let fn = FlatNode.make(fromDbKey(key),
                             flatTree[key]);
      flatNodes.push(fn);
    }
    
    return reader.traverse(flatNodes.sort((a, b) =>
      b.depth - a.depth))
  }

  private static traverse = (children: Array<FlatNode>): NodeChildren => {
    return children
      .reduce((allChildren, flat) =>
        reader.update(allChildren, flat),
              new MapVal<Path, NodeChildren>())
      .get(Path.root) || NodeChildren.empty;

  }

  // assumes that node has a greater depth than roots (sort beforehand)
  private static update(roots: MapVal<Path, NodeChildren>,
                        flat: FlatNode): MapVal<Path, NodeChildren> {
    let node = flat.toNodeWithChildren(roots.get(flat.path));

    roots.delete(flat.path);
    let siblings = roots.get(flat.path.parent);

    let updated = siblings? siblings.addNode(node):
      NodeChildren.make([node]);
    roots.set(flat.path.parent, updated);
    return roots;
  }
}


export class writer {

  static rootChildren = (root: NodeRoot): FlatNodeDoc => {
    let res = {};
    return root.children
      .nodes
      .flatMap(_ => 
        writer.traverse(_, Path.root))
      .reduce((acc, _) =>
        ({ ...acc, [_[0]]: _[1] }), {});
  };

  private static traverse = (node: Node, parentPath: Path): Array<[string, NodeDoc]> => {
    let path = parentPath.add(node)

    let res = node.children.nodes
      .flatMap(_ => writer.traverse(_, path));
    res.push([encodeDbKey(path), writeNode(node)])
    return res;
  }
}
