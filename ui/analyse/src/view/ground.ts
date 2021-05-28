import { h } from 'snabbdom';
import Ctrl from '../ctrl';
import * as util from './util';
import { Api as DoApi, default as Dochess } from 'dochess';

export default function vGround(ctrl: Ctrl) {
  return h('div', {
    hook: util.onInsert(el => {
      ctrl.setDochess(Dochess(el, makeConfig(ctrl)));
    })
  })  
}

export function makeConfig(ctrl: Ctrl) {

  const config = {
    userMove: ctrl.userMove
  };

  return config;
}
