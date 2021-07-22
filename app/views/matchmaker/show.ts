import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';

export const showCsGo = () => (ctx: Context) => html.base.layout("Eslestirme CsGo 5v5", [
  tags.main({ class: 'matchmaker__app box box-pad' }, [
    tags.h1(['Eslestirme CsGo 5v5']),

    tags.div({class: 'matchmaker__start' }, [
      tags.a({ href: '#', class: 'button button-metal config_hook' }, ['Tek Mac Ara'])
    ])
  ])
], {
  moreCss: tags.frag([
    h.cssTag('matchmaker.index')
  ]),
  moreJs: tags.frag([
    h.matchmakerTag(),
    h.embedJsUnsafeLoadThen(`
CsGoMatchmaker.boot(${h.safeJsonValue({
"data": 'data'
})});
`)(ctx)
  ])
})(ctx);
