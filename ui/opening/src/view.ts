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
  let { chapter, flash_nb_games } = ctrl

  let disabled = flash_nb_games !== undefined
  let content = flash_nb_games !== undefined ? `${flash_nb_games} games loaded`:'Refresh Games'


  return h('div.info', [
    h('h3', chapter.name),
    h('a', { props: { href: chapter.site, target: '_blank' } }, 'See study on lichess'),
    h('div.since', [h('span', 'Games since: '),
      h('span', ctrl.games_since.toLocaleString())]),
    h('div.button', {
      cls: { disabled },
      hook: bind('click', ctrl.refresh_games, ctrl.redraw)
    }, content),
    h('a.button', {
      props: {
        href: 'https://lichess.org/?user=openingsexercise#friend',
        target: '_blank'
      }
    }, 'Challenge @openingsexercise')
  ])
}

export function board(ctrl: Ctrl) {
  return h('div.board.pink', ground(ctrl))
}

export function side(ctrl: Ctrl) {
  return h('div.side', [
    h('div.controls', [
      h('a.delete.red', {
        hook: bind('click', e => ctrl.delete(), ctrl.redraw)
      }, 'Delete'),
      h('a.reset.red', {
        hook: bind('click', e => ctrl.reset(), ctrl.redraw)
      }, 'Reset Progress')
    ]),
    chapters(ctrl)
  ])
}

export function chapters(ctrl: Ctrl) {
  return h('div.chapters', ctrl.chapters
    .map(c => h('div.chapter', { class: { 
      selected: ctrl.chapter === c 
    },
      hook: bind('click', e => ctrl.select(c.id), ctrl.redraw)
    },  h('h3', c.name)))
  )
}

export function tview(ctrl: Ctrl) {
  return h('div.tview', {
    hook: mainHook(ctrl)
  }, [
    ...(renderChildrenOf(ctrl, ctrl.line, {
      isMainline: true,
      parentPath: ''
    }) || [])
  ])
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

function renderInlineCommentsOf(ctrl: Ctrl, node: FNode<MoveNode>) {
  let res: any = []
  if (node.data.comments)  {
    res = node.data.comments.map(comment => {
      let truncated = comment
      return h('comment', truncated)
    })
  }

  let a = node.data.nb_reached
  let klass = { red: a < 2, green: a > 6 }
  let stats = node.data.nb_made + '/' + a

  return res.concat([
    h('comment', {
      class: klass
    }, stats)
  ])
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
      ...renderInlineCommentsOf(ctrl, main),
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
  const path = opts.parentPath + node.id,
  comments = renderInlineCommentsOf(ctrl, node)



  return [renderMoveOf(ctrl, node, opts)]
  .concat(comments)
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
