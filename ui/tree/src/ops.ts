export function collect(from: Tree.Node, pickChild: (node: Tree.Node) => Tree.Node | undefined): Tree.Node[] {

  const nodes = [from];
  let n = from,
  c;

  while ((c = pickChild(n))) {
    nodes.push(c);
    n = c;
  }
  return nodes;  
}

export function first(nodeList: Tree.Node[]): Tree.Node | undefined {
  return nodeList[0];
}

export function childById(node: Tree.Node, id: string): Tree.Node | undefined {
  return node.children.find(child => child.id === id);
}
