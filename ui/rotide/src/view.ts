import { h } from 'snabbdom';
import Ctrl from './ctrl';
import throttle from 'common/throttle';
import * as util from './util';
import { default as vBar } from './bar/view';
import { default as vOverlay } from './bar/oview';
import csdm from 'csdm';

export default function view(ctrl: Ctrl) {
  return h('div.rotide', {
    hook: util.bind('click', e => {
      ctrl.barCtrl.close();
    }, ctrl.redraw)
  }, [
    vApp(ctrl),
    vBar(ctrl.barCtrl),
    vOverlay(ctrl.barCtrl)
  ]);
}

export function vApp(ctrl: Ctrl) {

  let onInput = throttle(400, _ => {
    ctrl.setUnsavedMd(_);
    ctrl.redraw();
  });
  
  return h('div.rotide__app', [
    h('div.rotide__app__editor', [
      h('div.editor', [
        h('textarea', {
          props: {
            value: ctrl.unsavedMd
          },
          on: {
            input(e) {
              const $_ = e.target as HTMLTextAreaElement;
              onInput($_.value);
            }
          }
        })
      ]),
      h('div.preview', [
        h('div', {
          hook: util.onInsert(el => {
            ctrl.setCsApi(csdm(el, {
              md: ctrl.unsavedMd
            }));
          })
        })
      ])
    ])
  ]);
}
