export type MoveNodeRootBase = {
  ply: Ply,
  fen: Fen,
  comments?: Array<string>,
  glyphs: string,
}

export type MoveRoot = MoveNodeRootBase & {
}

export type MoveNode = MoveNodeRootBase & {
  fen_before: Fen,
  uci: string,
  san: string,
  nb_made: number,
  nb_reached: number
}
