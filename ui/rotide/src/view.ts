import { vh, h } from 'hhh';
import Ctrl from './ctrl';
import throttle from 'common/throttle';
import escsh from 'escsh';
import { defaultMd } from './fixtures';

export default class View {
  
  ctrl: Ctrl
  
  constructor(ctrl: Ctrl) {
    this.ctrl = ctrl;
  }

  vEditor() {

    const onInput = throttle(400, this.ctrl.input.bind(this.ctrl));

    let v$edit = vh('textarea', {}, {
      listeners: {
        input: (e: InputEvent, _: Node) => {
          let value: string = (e.target as HTMLTextAreaElement).value;
          onInput(value);
        }
      },
      element: () => (_$: Node) => {
        (_$ as HTMLTextAreaElement).value = defaultMd;
      }
    }, []);

    let v$preview = 
      vh('div', {}, {
        element: () => ($_: Node) => {
          this.ctrl.setEsApi(escsh($_ as Element, {
            md: defaultMd
          }));
        }
      }, []);


    return h('div.rotide__app__editor', 
             [h('div.editor', [v$edit]), 
              h('div.preview', [v$preview])]);
  }
  
  vApp() {
    return this.vEditor()
  }

}
