import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';
import { RoundData } from 'shared_options';


export const player = (data: RoundData) => (ctx: Context) => html.base.layout("Takimlar Hazir CsGo 5v5", [
  tags.main({ class: 'round__app box box-pad' })
],{
  moreCss: tags.frag([
    h.cssTag('round')
  ]),
  moreJs: tags.frag([
    h.roundTag(),
    h.embedJsUnsafeLoadThen(`
CsGoRound.boot(${h.safeJsonValue({
"data": data
})});
`)(ctx)
  ])
})(ctx);
