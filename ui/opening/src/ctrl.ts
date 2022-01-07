
export type LightChapter = {
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
  chapters: Array<LightChapter>;

  selected: number

  get chapter(): LightChapter {
    return this.chapters[this.selected]
  }

  constructor(readonly opts: any, 
    readonly  redraw: any) {
    this.chapters = opts.chapters 
    this.selected = 0
  }


  select = (chapter: LightChapter) => {
    this.selected = this.chapters.indexOf(chapter)
  }
}
