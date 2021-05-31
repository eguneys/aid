import { h } from 'snabbdom';
import StudyCtrl from '../studyctrl';
import { bind } from './util';

export function view(ctrl: StudyCtrl) {

  let canContribute = ctrl.canContribute;
  
  return h('div.study__chapters', {},
           ctrl.chapters.list()
             .map((chapter, i) => {
               let active = false;
               return h('div', {
                 key: chapter.id,
                 attrs: { 'data-id': chapter.id },
                 class: { active }
               }, [
                 h('span', ['' + (i + 1)]),
                 h('h3', chapter.name),
                 canContribute ? h('i.act', { }, 'Edit'): null
               ]);
             })
             .concat(
               ctrl.canContribute ? [
                 h('div.add', {
                   hook: bind('click', ctrl.chapters.toggleNewForm, ctrl.redraw)
                 }, [h('span', '+'), h('h3', 'Add New Puzzle')])
               ]: []
             )
          );
  
}
