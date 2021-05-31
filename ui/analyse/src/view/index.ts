import { h } from 'snabbdom';
import Ctrl from '../ctrl';
import vGround from './ground';
import * as studyView from './studyView';

export default function view(ctrl: Ctrl) {
  let study = ctrl.study;
  
  return h('main.analyse', [
    study ?
      studyView.overboard(study) : null,
    h('div.analyse__board', [vGround(ctrl)]),
    h('div.analyse__tools', [
      h('div.analyse__moves', 'tview')
    ]),
    h('div.analyse__underboard', [
      
    ]),
    study?
    h('aside.analyse__side', [
      studyView.side(study)
    ]): null
  ]);
}
