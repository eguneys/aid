import { h } from 'snabbdom';
import Ctrl from './ctrl';
import csdm from 'csdm';
import * as util from './util';


export default function view(ctrl: Ctrl) {

  return h('div.tencon__app', [
    h('div', {
      hook: util.onInsert((elm: Element) => {
        csdm(elm, {
          md: ctrl.content.content
        })
      })
    })
  ]);
  
}
