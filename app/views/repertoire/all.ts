import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';
import { reptor } from 'options';

export const all = (data: reptor.ReptorData) => (ctx: Context) => html.base.layout("Repertoire", [
  tags.main({ class: 'reptor' }, [
    tags.h1({ }, ['Repertoire']),
    tags.div({ class: 'reptor__all' })
  ])
], {
  moreJs: tags.frag([
    h.reptorTag(),
    h.embedJsUnsafeLoadThen(`
ChessIsReptor.boot(${h.safeJsonValue({
data: data
})})`)(ctx)    
  ]),
  moreCss: tags.frag([
    h.cssTag('reptor')
  ])
})(ctx);
