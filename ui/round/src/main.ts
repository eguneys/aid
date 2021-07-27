import { RoundOptions } from './interfaces';
import { attributesModule,
         classModule,
         init } from 'snabbdom';
import RoundCtrl from './ctrl';
import { main as view } from './view';

export interface RoundApi {
  socketReceive(typ: string, data: any): boolean;
}

const patch = init([classModule, attributesModule]);

export function app(opts: RoundOptions) {

  const ctrl = RoundCtrl.make(opts, redraw);

  const blueprint = view(ctrl);
  opts.element.innerHTML = '';
  let vnode = patch(opts.element, blueprint);

  function redraw() {
    vnode = patch(vnode, view(ctrl));
  }

  return {
    socketReceive: ctrl.socket.receive,
  }
}
