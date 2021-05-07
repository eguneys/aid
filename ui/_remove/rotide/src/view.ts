import { VNode, h } from 'snabbdom';
import Ctrl from './ctrl';
import throttle from 'common/throttle';
import * as util from './util';
import { default as vBar } from './bar/view';
import { default as vOverlay } from './bar/oview';
import csdm from 'csdm';
import * as sfilg from 'sfilg';

export default function view(ctrl: Ctrl) {
  return h('div.rotide', {
    hook: util.bind('click', e => {
      ctrl.barCtrl.close();
    }, ctrl.redraw)
  }, [
    vApp(ctrl),
    vBar(ctrl.barCtrl),
    vOverlay(ctrl.barCtrl)
  ]);
}

function vGlyph(ctrl: Ctrl, _: sfilg.Glyph) {
  return h('span', {props: {
    title: _.name
  }, hook: util.bind('click', () => {
    ctrl.addGlyph(_.symbol);
  })}, _.symbol);
}

export function vGlyphPopup(ctrl: Ctrl) {
  return h('div.popup.glyphs', [
    h('div.group', sfilg.MoveAssesment.map(_ => vGlyph(ctrl, _))),
    h('div.group', sfilg.PositionAssesment.map(_ => vGlyph(ctrl, _))),
    h('div.group', sfilg.Observation.map(_ => vGlyph(ctrl, _)))
  ]);
}

export function vApp(ctrl: Ctrl) {

  let onInput = throttle(400, _ => {
    ctrl.setUnsavedMd(_);
    ctrl.redraw();
  });

  let glyphPopup = ctrl.isGlyphsOpen ?
    vGlyphPopup(ctrl) : null;
  
  return h('div.rotide__app', [
    h('div.rotide__app__editor', [
      h('div.editor', [
        glyphPopup,
        h('div.edit', [
          h('span', {
            hook: util.bind('click', e => {
              ctrl.toggleGlyphs()
            })
          }, '+Glyph')]),
        h('textarea', {
          props: {
            value: ctrl.unsavedMd
          },
          hook: util.onInsert(elm => {
            ctrl.set$Editor(elm);
          }),
          on: {
            input(e) {
              const $_ = e.target as HTMLTextAreaElement;
              onInput($_.value);
            }
          }
        })
      ]),
      h('div.preview', [
        h('div', {
          hook: util.onInsert(el => {
            ctrl.setCsApi(csdm(el, {
              md: ctrl.unsavedMd
            }));
          })
        })
      ])
    ])
  ]);
}
