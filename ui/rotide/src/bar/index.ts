import { vinit } from 'hhh';
import Ctrl from './ctrl';
import View from './view';
import OView from './oview';

export default function app($element: Element, $overlay: Element) {

  let ctrl = new Ctrl();
  let view = new View(ctrl);
  let oview = new OView(ctrl.cchapter);

  let recons = vinit(),
  $_ = recons(view.vApp()),
  $o = recons(oview.vOverlay()),
  $dialog = recons(oview.vDialog());
  
  ctrl.trigger();
  
  $element.appendChild($_);
  $overlay.appendChild($o);
  $overlay.appendChild($dialog);
}
