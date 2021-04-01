import { vinit } from 'hhh';
import Ctrl from './ctrl';
import View from './view';

export default function app(element: Element) {

  let ctrl = new Ctrl();
  let view = new View(ctrl);

  let recons = vinit(),
  $_ = recons(view.vApp());

  ctrl.trigger();
  
  element.appendChild($_);
}
