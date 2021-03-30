import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../modules/api';

export const editor = () => (ctx: Context) => html.base.layout("Edit New Article", [
  tags.main({ id: 'board-editor'})
], {
  moreJs: tags.frag([
    h.editorTag(),
    h.embedJsUnsafeLoadThen(`
ChessIsRotide.boot(${h.safeJsonValue({
})})`)(ctx)
  ]),
  moreCss: tags.frag([
    h.cssTag('rotide')
  ])
})(ctx);
