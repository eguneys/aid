import { MatchmakerOptions } from './interfaces';
import { attributesModule,
         
         classModule,
         init } from 'snabbdom';
import MatchCtrl from './ctrl';
import { main as view } from './view';

export interface MatchmakerApi {
  socketReceive(typ: string, data: any): boolean;
  setRedirecting(): void;
  leavePool(): void;
}

const patch = init([classModule, attributesModule]);

export function app(opts: MatchmakerOptions) {


  const ctrl = MatchCtrl.make(opts, redraw);

  const blueprint = view(ctrl);
  opts.element.innerHTML = '';
  let vnode = patch(opts.element, blueprint);

  function redraw() {
    vnode = patch(vnode, view(ctrl));
  }

  return {
    socketReceive: ctrl.socket.receive,
    setRedirecting: ctrl.setRedirecting,
    enterPool: ctrl.enterPool,
    leavePool: ctrl.leavePool
  }
}
