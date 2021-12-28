import { h } from 'snabbdom'
import { bind } from './util'
import Ctrl from './ctrl'

export default function view(ctrl: Ctrl) {
  return h('main.opening', [
    h('div.chapters', ctrl.chapters
      .map(c => {
        let selected = ctrl.chapter === c 
        return h('div.chapter', { class: { 
            selected
          },
          hook: bind('click', e => ctrl.select(c), ctrl.redraw)
        },  h('h3', c.name))
      })
    )
  ])
}
