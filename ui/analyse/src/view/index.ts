import { h } from 'snabbdom';
import Ctrl from '../ctrl';
import vGround from './ground';

export default function view(ctrl: Ctrl) {
  return h('div.analyse', [
    h('div.analyse__board', [vGround(ctrl)]),
    h('div.analyse__tools', [
      h('div.analyse__moves', 'tview')
    ]),
    h('div.analyse__underboard', [
      
    ])
  ]);
}
