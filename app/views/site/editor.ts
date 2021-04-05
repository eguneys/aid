import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';

export const editor = (data: any) => (ctx: Context) => html.base.layout("Edit New Article", [
  tags.main({ class: 'rotide'}, [
    tags.div({ class: 'rotide__app' }),
    tags.div({ class: 'rotide__bar' })
  ]),
], {
  moreJs: tags.frag([
    h.editorTag(),
    h.embedJsUnsafeLoadThen(`
ChessIsRotide.boot(${h.safeJsonValue({
data: data
})})`)(ctx)
  ]),
  moreCss: tags.frag([
    h.cssTag('rotide')
  ])
})(ctx);
