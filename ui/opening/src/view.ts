import { h, VNode } from 'snabbdom'
import { bind } from './util'
import Ctrl from './ctrl'
import { MoveNode, MoveRoot, LightChapter } from './ctrl'
import { FRoot, FNode, Path } from 'chesstwo'
import { render as ground } from './ground'

export type Opts = {
  isMainline: boolean,
  withIndex?: boolean,
  parentPath: Path
}


export default function view(ctrl: Ctrl) {
  return h('main.opening', [
    h('div.opening__board.main-board', board(ctrl)),
    h('div.opening__tools', tview(ctrl)),
    h('div.opening__info', info(ctrl)),
    h('aside.opening__side', side(ctrl))
  ])
}

export function info(ctrl: Ctrl) {
  let { chapter } = ctrl
  return h('div.info', [
    h('h3', chapter.name),
    h('a', { props: { href: chapter.site, target: '_blank' } }, 'See study on lichess')
  ])
}

export function board(ctrl: Ctrl) {
  return h('div.board.pink', ground(ctrl))
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
  return h('div.tview', {
    hook: mainHook(ctrl)
  }, renderChildrenOf(ctrl, ctrl.line, {
    isMainline: true,
    parentPath: ''
  }))
}

export function mainHook(ctrl: Ctrl) {
  return {
    insert: (vnode: VNode) => {
      const el = vnode.elm as HTMLElement


      el.addEventListener('mousedown', (e: MouseEvent) => {
        const path = eventPath(e)
        if (path) ctrl.userJump(path)
        ctrl.redraw()
      })
    }
  }
}

function eventPath(e: MouseEvent): Path | null {
  return (
    (e.target as HTMLElement).getAttribute('p') ||
    ((e.target as HTMLElement).parentNode as HTMLElement).getAttribute('p')
  )
}

function renderChildrenOf(ctrl: Ctrl, node: FRoot<MoveNode, MoveRoot> | FNode<MoveNode>, opts: Opts): Array<VNode> | undefined {
  let cs = node.children,
    main = cs[0]
  if (!main) return
  if (!cs[1]) {
    return renderMoveAndChildrenOf(ctrl, main, { isMainline: true, 
      withIndex: opts.withIndex,
      parentPath: opts.parentPath })
  }
  if (opts.isMainline) {
    return [
      ...[renderMoveOf(ctrl, main, { isMainline: true, 
        withIndex: opts.withIndex,
        parentPath: opts.parentPath } )],
      renderLines(ctrl, cs.slice(1), { 
        isMainline: true,
        parentPath: opts.parentPath
      }),
      ... renderChildrenOf(ctrl, main, { 
        isMainline: true, 
        withIndex: true,
        parentPath: opts.parentPath + main.id }) || []
    ]
  }

  return [renderLines(ctrl, cs, opts)]
}

function renderLines(ctrl: Ctrl, lines: Array<FNode<MoveNode>>, opts: Opts): VNode {
  return h('lines', lines.map(n => 
    h('line', renderMoveAndChildrenOf(ctrl, n, { isMainline: false, 
      withIndex: true,
      parentPath: opts.parentPath }))
  ))
}

function renderMoveAndChildrenOf(ctrl: Ctrl, node: FNode<MoveNode>, opts: Opts): Array<VNode> {
  const path = opts.parentPath + node.id
  return [renderMoveOf(ctrl, node, opts)]
  .concat(renderChildrenOf(ctrl, node, { 
    isMainline: opts.isMainline,
    parentPath: path }) || [])
}

function renderMoveOf(ctrl: Ctrl, node: FNode<MoveNode>, opts: Opts) {
  const path = opts.parentPath + node.id

  let content = [
    opts.withIndex || node.data.ply & 1 ? renderIndex(node.data.ply) : null,
    node.data.san
  ]

  return h('move', {
    attrs: { p: path }
  }, content)
}

function renderIndex(ply: Ply) {
  let index = Math.ceil(ply / 2) + (ply % 2 === 0 ? '...': '.')
  return h('index', index)
}
