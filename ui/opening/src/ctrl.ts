import * as xhr from 'common/xhr'
import { Ply, Fen, FRoot } from 'chesstwo'
import { Api as ChessgroundApi } from 'chessground/api'

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

export default class Ctrl {

  chessground!: ChessgroundApi
  opening: LightOpening
  chapters: Array<LightChapter>;

  selected: number

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
  }

  delete = () => {
    xhr.json(`/opening/${this.opening.id}`, {
      method: 'DELETE'
    }).then(_ => chest.redirect('/'))
  }

  select = (chapter: LightChapter) => {
    this.selected = this.chapters.indexOf(chapter)
  }
}
