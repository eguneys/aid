import * as xhr from 'common/xhr'
import { Ply, Fen, FRoot } from 'chesstwo'

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
  root: FRoot<MoveNode, MoveRoot>
}

export type LightOpening = {
  id: string,
  name: string
}

export type Move = {
  index?: string,
  san: string
}
export type Comment = string
export type Line = Move | Comment | Lines
export type Lines = Array<Line>;

export function isMove(_: Line): _ is Move {
  return !Array.isArray(_) && typeof _ !== 'string'
}

export function isComment(_: Line): _ is Comment {
  return typeof _ === 'string'
}

export function make_move(san: string, index?: string) {
  return {
    san, 
    index
  }
}

export default class Ctrl {

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
