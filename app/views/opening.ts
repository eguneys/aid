import tags from './tags';
import * as html from './';
import * as h from './helper';
import { Context } from '../../modules/api';


export const home = () => (ctx: Context) => html.base.layout("Opening Knowledge", [
  tags.main({ class: 'opening' }, [
    tags.h1(['Opening Knowledge']),
    tags.ul([
      tags.li(['Slav opening'])
    ])
  ])
], {
  moreCss: tags.frag([
    h.cssTag('auth')
  ])
})(ctx);
