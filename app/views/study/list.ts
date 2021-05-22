import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';
import * as bits from './bits';

export const mine = () => layout('My Studies', 'mine');

export const all = () => layout('All Studies', 'all');


const menu = (active: string) => {
  const activeCls = (c: string) => (c === active) ? 'active': '';
  return tags.aside({ cls: 'page-menu__menu subnav' }, [
    // tags.a({cls: activeCls('all'), href: '/study/all'}, ['All Studies']),
    tags.a({cls: activeCls('mine'), href: '/study/mine'}, ['My Studies']),
  ])
}

const layout = (title: string,
                       active: string) => (ctx: Context) => html.base.layout(title, [
  tags.main({ cls: 'page-menu' }, [
    menu(active),
    tags.main({ cls: 'page-menu__content study-index box' }, [
      tags.div({ cls: 'box__top' }, [
        bits.newForm()
      ]),
      tags.div({ cls: 'box__pad' }),
      tags.div({ cls: 'studies list' }, [
      
      ])
    ])
  ])
], {
  moreCss: tags.frag([
    h.cssTag('study.index')
  ])
})(ctx);

