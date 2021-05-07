import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';
import * as chest from '../../../modules';
import { study as sstudy } from 'shared_options';

export const show = (s: chest.study.Study, opts: sstudy.StudyOptions) => (ctx: Context) =>
  html.base.layout(s.name, [
    tags.main({ cls: 'analyse' })
  ], {
    moreCss: h.cssTag('analyse.study'),
    moreJs: tags.frag([
      h.analyseTag(),
      h.embedJsUnsafe(`
chest.study=${h.safeJsonValue({
 "study": opts.study,
})}
`)(ctx)
    ])
  })(ctx);
