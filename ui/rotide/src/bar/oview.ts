import { h, vh, vmap, vex, VHNode, VHCEx } from 'hhh';
import ChapterCtrl from './cchapter';
import * as tn from './tonew';

export default class OView {

  ctrl: ChapterCtrl

  constructor(ctrl: ChapterCtrl) {
    this.ctrl = ctrl;
  }

  vNewItemName(headline: string, onSave: (_: string) => void) {

    let iname = '';
    
    return [
      h('div.headline', headline),
      h('div.input', [
        h('label.name', 'Name'),
        vh('input', {}, {
          attrs: (props) => ({
            type: 'text'
          }),
          listeners: {
            input: (e, _) => {
              iname = e.target.value; 
            }
          }
        }, [])]),
      h('div.buttons', [
        vh('button', {}, {
          listeners: {
            click: (e, _) => {
              this.ctrl.toNew.pub(0);              
            }
          }
        }, [h('span', 'Cancel')]),
        vh('button', {}, {
          listeners: {
            click: (e, _) => {
              onSave(iname);
            }
          }
        }, [h('span', 'Save')])
      ])
    ];
  }

  vNewBook(toNewBook: tn.ToNewBook) {
    return this.vNewItemName('New Book', iname => {
      this.ctrl.newBook(toNewBook, iname);
    });
  }

  vNewChapter(toNewChapter: tn.ToNewChapter) {
    return this.vNewItemName('New Chapter', iname => {
      this.ctrl.newChapter(toNewChapter, iname);
    });
  }

  vNewSection(toNewSection: tn.ToNewSection) {
    return this.vNewItemName('New Section', iname => {
      this.ctrl.newSection(toNewSection, iname);
    });
  }
  
  vDialog() {
    let v$dx = vex([]);
    let v$d = vh('div.rotide__dialog', {
      hidden: true
    }, {
      listeners: {
        click: (e, _) => { e.stopPropagation(); }
      },
      klassList: (props) => [props.hidden?'hidden':[]].flat()
    }, [
      v$dx
    ]);

    this.ctrl.toNew.sub(_ => {
      if (_ === 0) {
        v$d.update({ hidden: true });
      } else if (tn.isToNewBook(_)) {
        v$d.update({ hidden: false });
        v$dx.replace(this.vNewBook(_));
      } else if (tn.isToNewChapter(_)) {
        v$d.update({ hidden: false });
        v$dx.replace(this.vNewChapter(_));        
      } else if (tn.isToNewSection(_)) {
        v$d.update({ hidden: false });
        v$dx.replace(this.vNewSection(_));
      }
    });

    return v$d;
  }

  vOverlay() {

    let v$o = vh('div.rotide__overlay', {
      hidden: true
    }, {
      klassList: (props) => [props.hidden?'hidden':[]].flat(),
      listeners: {
        click: (e, _) => { e.stopPropagation(); this.ctrl.toNew.pub(0); }
      }
    }, []);

    this.ctrl.toNew.sub(_ => {
      if (_ === 0) {
        v$o.update({ hidden: true });
      } else {
        v$o.update({ hidden: false });
      }
    });
    
    return v$o;
  }
  
}
