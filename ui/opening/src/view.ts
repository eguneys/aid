import { h, VNode } from 'snabbdom'
import { bind } from './util'
import Ctrl from './ctrl'
import { MoveNode, MoveRoot, LightChapter, Lines, Line, isMove, isComment } from './ctrl'
import { FRoot, FNode } from 'chesstwo'

export default function view(ctrl: Ctrl) {
  return h('main.opening', [
    h('div.opening__board', board()),
    h('div.opening__tools', tview(ctrl)),
    h('div.opening__info', info(ctrl)),
    h('aside.opening__side', side(ctrl))
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

export function side(ctrl: Ctrl) {
  return h('div.side', [
    h('div.controls', [
      h('a.delete', {
        hook: bind('click', e => ctrl.delete(), ctrl.redraw)
      }, 'Delete')
    ]),
    chapters(ctrl)
  ])
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
  return h('div.tview', renderLines(ctrl, ctrl.line.children))
}


function renderChildrenOf(ctrl: Ctrl, node: FNode<MoveNode>): Array<VNode> | undefined {
  let cs = node.children,
    main = cs[0]
  if (!main) return
  return [
    ...[renderMoveOf(ctrl, main)],
    renderLines(ctrl, cs.slice(1)),
    ... renderChildrenOf(ctrl, main) || []
  ]
}

function renderLines(ctrl: Ctrl, lines: Array<FNode<MoveNode>>): VNode {
  return h('lines', lines.map(n => 
    h('line', renderMoveAndChildrenOf(ctrl, n))
  ))
}

function renderMoveAndChildrenOf(ctrl: Ctrl, node: FNode<MoveNode>): Array<VNode> {
  return [renderMoveOf(ctrl, node)]
  .concat(renderChildrenOf(ctrl, node) || [])
}

function renderMoveOf(ctrl: Ctrl, node: FNode<MoveNode>) {
  return h('move', node.data.san)
}
