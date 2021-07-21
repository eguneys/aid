import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';

export const list = () => (ctx: Context) => html.base.layout("Eslestirme", [
  tags.main({ class: 'box box-pad' }, [
    tags.h1(['Eslestirme']),
    tags.div({ class: 'games list' }, [
      tags.div({ class: 'game' }, [
        tags.div({ class: 'top' }, [
          tags.a({ class:"game-name", href: '/matchmaker/csgo' }, [
            tags.h2('CsGo 5v5')
          ])
        ])
      ])
    ])
  ])
], {
  moreCss: tags.frag([
    h.cssTag('matchmaker.index')
  ])
})(ctx);
