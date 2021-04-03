import { h, vh, vmap, vex, VHNode, VHCEx } from 'hhh';
import Ctrl from './ctrl';
import VChapter from './vchapter';
import * as c from './chapter';



export default class View {
  
  ctrl: Ctrl
  chapterView: VChapter
  
  constructor(ctrl: Ctrl) {
    this.ctrl = ctrl;
    this.chapterView = new VChapter(this.ctrl.cchapter);
  }
  
  vDropdown(onAddToBook: () => void) {
    return h('div.popup.dropdown', [
      vh('div', {}, { listeners: {
        click: (e, _) => { onAddToBook(); } } }, [h('a', 'Add to book')]),
    ]);
  }

  vOpen(onClick: () => void) {
    return vh('div.open', {}, {
      listeners: {
        click: (e, _) => {
          onClick();
        }
      }
    }, [h('span', '⋮')]);
  }

  vApp() {

    let [v$addToBook, fToggleAddToBook] = togglePopup(this.chapterView.vAddToBookPopup());
    
    let [v$dropdown, fToggle] = togglePopup(this.vDropdown(fToggleAddToBook));

    document.body.addEventListener('click', () => {
      fToggleAddToBook(true) || fToggle(true);
    });

    this.ctrl.cchapter.addTo.sub(addTo => {
      if (c.isInSection(addTo)) {
        fToggleAddToBook(true);
        fToggle(true);
      }
    });
    
    return vh('div.rotide__bar__control', {}, {
      element: () => (_) => {
        fToggle();
        fToggleAddToBook();
      },
      listeners: {
        click: (e, _) => { e.stopPropagation(); }
      }
    }, [
      v$addToBook,
      v$dropdown,
      this.vOpen(() => {
        fToggleAddToBook(true) || fToggle();
      })
    ]);
  }

  
}

function togglePopup(v$content: VHNode): [VHCEx, any] {
  let v$closed: Array<VHNode> = [],
  v$opened = [v$content],
  v$dropContent = v$closed;

  let v$dropdown = vex(v$dropContent);

  function toggle(close: boolean = false) {
    if (close && v$dropContent === v$closed) {
      return false;
    }
    v$dropContent = v$dropContent===v$closed?v$opened:v$closed;
    v$dropdown.replace(v$dropContent);
    return true;
  }
  return [v$dropdown, toggle];
}
