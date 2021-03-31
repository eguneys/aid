import { h } from 'hhh';
import Ctrl from './ctrl';

export default class View {
  
  ctrl: Ctrl
  
  constructor(ctrl: Ctrl) {
    
  }

  vApp() {
    return h('div.rotide__bar__control', [
      h('div', ['⋮'])
    ]);
  }

  
}
