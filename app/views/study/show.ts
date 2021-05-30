import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';
import * as chest from '../../../modules';
import { AnalyseOptions } from 'shared_options';

const socketUrl = (id: string) => `/study/${id}/socket`;

export const show = (s: chest.study.Study,
                     opts: Partial<AnalyseOptions>,
                     socketVersion: chest.socket.SocketVersion) => (ctx: Context) =>
  html.base.layout(s.name, [
    tags.main({ cls: 'analyse' })
  ], {
    moreCss: h.cssTag('analyse.study'),
    moreJs: tags.frag([
      h.analyseTag(),
      h.embedJsUnsafe(`
chest.study=${h.safeJsonValue({
 "study": opts.study,
 "data": opts.data,
 "socketUrl": socketUrl(s.id),
 "socketVersion": socketVersion.value
})}
`)(ctx)
    ])
  })(ctx);
