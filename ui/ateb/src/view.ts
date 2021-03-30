import { vh, h } from 'hhh';
import Ctrl from './ctrl';
import ssehfx from 'ssehfx';
import ssehciT from 'ssehcit';
import ssehc from 'ssehc';

export default class View {

  ctrl: Ctrl

  constructor(ctrl: Ctrl) {
    this.ctrl = ctrl;
  }

  vEditor() {
    return vh('div.ateb__editor', {}, {
      element: () => (elm: Node) => {
        ssehciT(elm as Element, {
          fen: '8/8/8/8/8/8/8/8 w - - 0 1',
          events: {
            canDrop: this.ctrl.canDrop,
            onDrop: this.ctrl.onDrop,
            onPickup: this.ctrl.onPickup
          },
          effect: ($_: Node) => {
            this.ctrl.setFxApi(ssehfx($_ as Element));
          }
        });
      }
    }, []);
  }

  // vBoard() {
  //   return h('div.ateb__board', [vh('div.board', {}, {
  //     element: () => (elm: Node) => {
  //       ssehc(elm as Element);
  //     }
  //   }, [])]);
  // }

  vApp() {
    return h('div.ateb', [
      this.vEditor()
    ]);
  }


}
