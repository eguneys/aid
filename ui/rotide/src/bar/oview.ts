import { VNode, h } from 'snabbdom';
import Ctrl from './ctrl';
import * as t from './types';
import * as util from '../util';

function vNameDialog(ctrl: Ctrl) {

  let headline;

  if (!ctrl.vSelectBook) {
    return null;
  }
  
  if (t.isBooksView(ctrl.vSelectBook)) {
    headline = 'New Book';
  } else if (t.isChaptersView(ctrl.vSelectBook)) {
    headline = 'New Chapter';
  } else if (t.isSectionsView(ctrl.vSelectBook)) {
    headline = 'New Section';
  }

  
  return h('div.rotide__dialog', {
    on: { click: e => e.stopPropagation() }
  }, [
    h('div.headline', headline),
    h('div.input', [
      h('label.name', 'Name'),
      h('input', {
        attrs: { type: 'text' },
        on: {
          input(e) {
            let $_ = e.target as HTMLInputElement;
            ctrl.nameSelectBook = $_.value;
          }
        }
      })
    ]),
    h('div.buttons', [
      h('button', {
        hook: util.bind('click', e => {
          e.stopPropagation();
          ctrl.closeNewBookDialog();
        }, ctrl.redraw)
      }, 'Cancel'),
      h('button', {
        hook: util.bind('click', e => {
          return ctrl.submitNewBookDialog();
        }, ctrl.redraw)
      }, 'Save')
    ])
  ])
}


export default function view(ctrl: Ctrl) {

  let children: Array<VNode | null> = [];

  if (ctrl.isNewDialogOpen) {
    children = [
      h('div.rotide__overlay', {
        style: {
          opacity: '0',
          transition: 'opacity 0.3s',
          delayed: ({ opacity: '0.8' } as any)
        }
      }),
      vNameDialog(ctrl)
    ];
  }
  
  return h('div', children);
  
}
