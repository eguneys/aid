import { h, VNode } from 'snabbdom'
import { Chessground } from 'chessground'
import Ctrl from './ctrl'


export function render(ctrl: Ctrl): VNode {
  return h('div.cg-wrap', {
    hook: {
      insert: vnode => {
        ctrl.chessground = Chessground(vnode.elm as HTMLElement, makeConfig(ctrl))
      }
    }
  })
}

export function makeConfig(ctrl: Ctrl) {
  const config = {
    viewOnly: true
  }
  return config
}
