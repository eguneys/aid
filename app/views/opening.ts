import tags from './tags';
import * as html from './';
import * as h from './helper';
import { Context } from '../../modules/api';


export const home = () => (ctx: Context) => html.base.layout("Opening Knowledge", [
  tags.main({ class: 'opening' }, [
    tags.h1(['Opening Knowledge']),
    tags.ul([
      tags.li({}, [
        tags.a([tags.h1(['The Classical Slav'])]),
        tags.p(['Chapter 1'])
      ]),
      tags.li({}, [
        tags.a([tags.h1(['The King\'s Gambit - John Shaw'])]),
        tags.p(['Chapter 1'])
      ]),
    ]),
    tags.div({ class:'controls' }, [
      tags.input({ type:'text', placeholder:'add lichess study link' })
    ]),
    tags.section({ class:'featured' }, [
      tags.h2(['Featured studies']),
      tags.p(['See ',
        tags.a({ href: 'about' }, ['about']),
        ' to see featured studies.'
      ])
    ])
  ])
], {
  moreCss: tags.frag([
    h.cssTag('auth')
  ])
})(ctx);
