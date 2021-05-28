export function treeReconstruct(parts: Tree.Node[]): Tree.Node {

  const root = parts[0],
  nb = parts.length;

  let node = root;
  root.id = '';

  for (let i = 1; i < nb; i++) {
    const n = parts[i];
    if (node.children) node.children.unshift(n);
    else node.children = [n];
    node = n;
  }
  node.children = node.children || [];
  return root;  
}
