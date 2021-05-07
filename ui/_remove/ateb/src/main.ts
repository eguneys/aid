import { vinit } from 'hhh';
import Ctrl from './ctrl';
import View from './view';

export default function app(element: Element) {

  let recons = vinit();

  let ctrl = new Ctrl();
  let view = new View(ctrl);

  let $_ = recons(view.vApp());

  element.appendChild($_);
}
