import { VNode,
         init,
         eventListenersModule,
         propsModule,
         classModule,
         styleModule,
         attributesModule } from 'snabbdom';

import view from './view';
import Ctrl from './ctrl';

const patch = init([
  propsModule,
  eventListenersModule,
  classModule,
  styleModule,
  attributesModule]);

export default function main($_: Element, opts: any) {
  
  let vnode: VNode, ctrl: Ctrl;
    
  function redraw() {
    vnode = patch(vnode, view(ctrl));
  }

  ctrl = new Ctrl(opts, redraw);
  
  vnode = patch($_, view(ctrl));
}
