import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';
import { kbm } from 'koobm';

export const content = (content: kbm.ContentM) => (ctx: Context) => html.base.layout(content.name, [
  tags.main({ class: 'tencon' }, [
    tags.h1({ }, [content.name]),
    tags.div({ class: 'tencon__app' })
  ])
], {
  moreJs: tags.frag([
    h.tenconTag(),
    h.embedJsUnsafeLoadThen(`
ChessIsTencon.boot(${h.safeJsonValue({
data: content
})})`)(ctx)    
  ]),
  moreCss: tags.frag([
    h.cssTag('tencon')
  ])
})(ctx);
