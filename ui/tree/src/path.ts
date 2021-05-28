export const root: Tree.Path = '';

export function head(path: Tree.Path): Tree.Path {
  return path.slice(0, 2);
}

export function tail(path: Tree.Path): Tree.Path {
  return path.slice(2);
}
