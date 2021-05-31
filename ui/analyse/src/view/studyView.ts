import { h } from 'snabbdom';
import StudyCtrl from '../studyctrl';
import { view as chapterView } from './studyChapters';
import { view as chapterNewFormView } from '../chapternewform';

export function overboard(ctrl: StudyCtrl) {

  if (ctrl.chapters.newForm.vm.open) {
    return chapterNewFormView(ctrl.chapters.newForm);
  }
  
}

export function side(ctrl: StudyCtrl) {

  function makeTab(key: string, name: string) {
    return h('span.' + key, name);
  }
  
  let tabs = h('div.tabs-horiz', [
    makeTab('chapters', ctrl.chapters.size + ' Puzzles')
  ]);

  let content = chapterView(ctrl);
  
  return h('div.study__side', [
    tabs,
    content
  ]);
  
}
