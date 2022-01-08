export type MoveNodeRootBase = {
  ply: Ply,
  fen: Fen,
  comments: string,
  glyphs: string
}

export type MoveRoot = MoveNodeRootBase & {
}

export type MoveNode = MoveNodeRootBase & {
  uci: string,
  san: string
}
