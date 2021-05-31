import { h } from 'snabbdom';
import { prop, Prop } from 'common';
import AnalyseCtrl from './ctrl';
import { AnalyseSocketSend } from './socket';
import { StudyChapterMeta, ChapterData } from 'shared_options';
import * as modal from './view/modal';
import { bind, bindSubmit, onInsert, option } from './view/util';

const defaultChapterData: ChapterData = {
  name: 'New Puzzle',
  orientation: 'auto'
};

export default class StudyChapterNewFormCtrl {

  static make = (send: AnalyseSocketSend,
                 list: Prop<StudyChapterMeta[]>,
                 root: AnalyseCtrl) => new StudyChapterNewFormCtrl(
                   send, list, root);

  vm: any = ({
    open: false,
    tab: prop('init')
  })

  redraw: Redraw

  constructor(readonly send: AnalyseSocketSend,
              readonly chapters: Prop<StudyChapterMeta[]>,
              readonly root: AnalyseCtrl) {

    this.redraw = root.redraw;
  }

  submit(d: Partial<ChapterData>) {
    const study = this.root.study;
    const dd = {
      ...defaultChapterData,
      ...d
    };

    if (!dd.pgn) this.send('addChapter', dd);
    this.close();
  }

  open() {
    this.vm.open = true;
  }

  close() {
    this.vm.open = false;
  }
  
  
  toggle() {
    if (this.vm.open) this.close();
    else this.open();
    
  }
  
}

export const fieldValue = (e: Event, id: string) =>
  ((e.target as HTMLElement).querySelector('#chapter-' + id) as HTMLInputElement)?.value;

export function view(ctrl: StudyChapterNewFormCtrl) {

  const activeTab = ctrl.vm.tab();
  const makeTab = function(key: string, name: string, title: string) {
    return h(
      'span.' + key, {
        class: { active: activeTab === key },
        attrs: { title },
        hook: bind('click', () => ctrl.vm.tab(key), ctrl.redraw)
      },
      name
    );
  }

  const currentChapter = ctrl.root.study!.data.chapter;
  
  return modal.modal({
    class: 'chapter-new',
    onClose() {
      ctrl.close();
      ctrl.redraw();
    },
    noClickAway: true,
    content: [
      h('h2', [
        'New Puzzle'
      ]),
      h('form.form3', {
        hook: bindSubmit(e => {
          ctrl.submit({
            name: fieldValue(e, 'name'),
            fen: fieldValue(e, 'fen') || (ctrl.vm.tab() === 'edit'? ctrl.vm.editorFen() : null),
            orientation: fieldValue(e, 'orientation') as Orientation
          });
        }, ctrl.redraw)
      }, [
        h('div.form-group', [
          h('label.form-label', {
            attrs: { for: 'chapter-name' }
          }, 'Name'),
          h('input#chapter-name.form-control', {
            attrs: {
              minlength: 2,
              maxlength: 80
            }, hook: onInsert<HTMLInputElement>(el => {
              if (!el.value) {
                el.value = `Puzzle ${ctrl.chapters().length + 1}`
                el.select();
                el.focus();
              }
            })
          })
        ]),
        h('div.tabs-horiz', [
          makeTab('init', 'Empty', 'Start from Initial Position'),
          makeTab('edit', 'Editor', 'Start from Custom Position'),
          makeTab('fen', 'FEN', 'Load position from Fen'),
          makeTab('pgn', 'PGN', 'Load a game from PGN')
        ]),
        activeTab === 'edit'
          ? h('div.board-editor-wrap', {
            
          }) : null,

        h('div.form-split', [
          h('div.form-group.form-half', [
            h('label.form-label', {
              attrs: { for: 'chapter-orientation' }
            }, 'Orientation'),
            h('select#chapter-orientation.form-control', {
            }, [...(activeTab === 'pgn' ? ['auto'] : []), 'white', 'black'].map(c =>
              option(c, currentChapter.setup.orientation, c))
             )
          ])
        ]),
        h('div.form-group', [
          modal.button('Create Puzzle')
        ])
      ])
    ]
  });
  
}
