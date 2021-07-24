import { h, VNode } from 'snabbdom';
import Ctrl from './ctrl';
import { bind } from './util';

export function main(ctrl: Ctrl): VNode {

  const member = ctrl.poolMember,
  active = !!member;

  return active?inPool(ctrl):menu(ctrl);
  
}

function inPool(ctrl: Ctrl): VNode {

  return h('main.matchmaker__app challenge-page box box-pad', [
    h('h1', 'Oyun ara'),
    h('div.details', 'CsGo 5v5 Tek Mac'),
    h('div.waiting', [
      h('span.user-link.target', {},
        `${ctrl.poolSize} bekleyen kisi var`),
      spinner(),
      h('p', 'Eslestirme bekleniyor')
    ]),
    h('div.cancel', 
      h('button.button.button-red.text', {
        hook: bind('click', e => {
          ctrl.clickPool('single')
        }, ctrl.redraw)
      }, 'Iptal Et')
     )
  ]);
  
}

function menu(ctrl: Ctrl): VNode {

  return h('main.matchmaker__app box box-pad', [
    h('h1', 'Eslestirme CsGo 5v5'),
    h('div.matchmaker__start', [
      h('a.button.button-metal', {
        hook: bind('click', e => {
          ctrl.clickPool('single')
        }, ctrl.redraw)
      }, 'Tek Mac Ara')
    ])
  ]);
  
}

function spinner() {
  return h('div.spinner', [
    h('svg', { attrs: { viewBox: '0 0 40 40' } }, [
      h('circle', {
        attrs: { cx: 20, cy: 20, r: 18, fill: 'none' },
      })
    ])
  ]);
}
