
type LightChapter = {
  name: string
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
