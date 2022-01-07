import { h, VNode } from 'snabbdom'
import { bind } from './util'
import Ctrl from './ctrl'
import { LightChapter, Lines, Line, isMove, isComment } from './ctrl'

export default function view(ctrl: Ctrl) {
  return h('main.opening', [
    h('div.opening__board', board()),
    h('div.opening__tools', tview(ctrl)),
    h('div.opening__info', info(ctrl)),
    h('aside.opening__side', chapters(ctrl))
  ])
}

export function info(ctrl: Ctrl) {
  let { chapter } = ctrl
  return h('div.info', [
    h('h3', chapter.name),
    h('a', { href: 'https://lichess.org/study' }, 'See study on lichess')
  ])
}

export function board() {
  return h('div.board', 'board')
}

export function chapters(ctrl: Ctrl) {
  return h('div.chapters', ctrl.chapters
    .map(c => h('div.chapter', { class: { 
      selected: ctrl.chapter === c 
    },
      hook: bind('click', e => ctrl.select(c), ctrl.redraw)
    },  h('h3', c.name)))
  )
}

export function tview(ctrl: Ctrl) {
  return h('div.tview', renderInLine(ctrl.line))
}

export function renderInLine(_: Line) {
  if (isMove(_)) {
    return h('move', [
      _.index ? h('index', _.index): '',
      _.san
    ])
  } else if (isComment(_)) {
    return h('comment', _)
  } else {
    return h('lines', renderLines(_))
  }
}


export function renderLines(lines: Lines): VNode {
  return h('line', lines.map(_ => renderInLine(_)))
}
