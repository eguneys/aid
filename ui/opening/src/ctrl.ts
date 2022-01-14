import * as xhr from 'common/xhr'
import { path_tail, path_head, Ply, Fen, FNode, FRoot, Path } from 'chesstwo'
import { Api as ChessgroundApi } from 'chessground/api'
import { Config as ChessgroundConfig } from 'chessground/config'

export type MoveNode = {
  ply: Ply,
  fen: Fen,
  uci: string,
  san: string
}

export type MoveRoot = {
  ply: Ply,
  fen: Fen
}

export type LightChapter = {
  name: string,
  root: FRoot<MoveNode, MoveRoot>,
  site: string
}

export type LightOpening = {
  id: string,
  name: string
}

function last<A>(aa: Array<A>) {
  return aa[aa.length - 1]
}

function collect(root: FRoot<MoveNode, MoveRoot>, pick: (_: FRoot<MoveNode, MoveRoot> | FNode<MoveNode>) => FNode<MoveNode> | undefined): FNode<MoveNode>[] {
  let nodes = []
  let n = root,
    c

  while ((c = pick(n))) {
    nodes.push(c)
    n = c
  }
  return nodes
}

function child_by_id(_: FRoot<MoveNode, MoveRoot> | FNode<MoveNode>, id: string): FNode<MoveNode> | undefined {
  return _.children.find(child => child.id === id)
}

function getNodeList(root: FRoot<MoveNode, MoveRoot>, path: Path) {
  return collect(root, (_: FRoot<MoveNode, MoveRoot> | FNode<MoveNode>) => {
    const id = path_head(path)
    if (id === '') return
    path = path_tail(path)

    return child_by_id(_, id)
  })
}

export default class Ctrl {

  chessground!: ChessgroundApi
  opening: LightOpening
  chapters: Array<LightChapter>;

  selected: number

  path!: Path
  node!: FNode<MoveNode>
  nodeList!: FNode<MoveNode>[]

  get chapter(): LightChapter {
    return this.chapters[this.selected]
  }

  get line(): FRoot<MoveNode, MoveRoot> {
    return this.chapter.root
  }

  constructor(readonly opts: any, 
    readonly  redraw: any) {
    this.chapters = opts.chapters 
    this.opening = opts.opening
    this.selected = 0

    this.setPath('')
  }

  setPath(path: Path) {
    this.path = path
    this.nodeList = getNodeList(this.line, path)
    this.node = last(this.nodeList)
  }

  userJump = (path: Path) => {
    this.setPath(path)
    this.showGround()
  }

  showGround() {
    this.withCg(cg => {
      cg.set(this.makeCgOpts())
    })
  }
  delete = () => {
    xhr.json(`/opening/${this.opening.id}`, {
      method: 'DELETE'
    }).then(_ => chest.redirect('/'))
  }

  select = (chapter: LightChapter) => {
    this.selected = this.chapters.indexOf(chapter)
  }

  makeCgOpts(): ChessgroundConfig {
    const node = this.node,
      config = {
        fen: node.data.fen,
        lastMove: uciToLastMove(node.data.uci)
      }

    return config
  }

  withCg = <A>(f: (cg: ChessgroundApi) => A): A | undefined => {
    if (this.chessground) return f(this.chessground)
  }
}

function uciToLastMove(uci?: Uci): any[] | undefined {
  if (!uci) return
  return [uci.substr(0, 2), uci.substr(2, 2)] as any[]
}
