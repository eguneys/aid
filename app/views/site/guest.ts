import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';


export const guest = () => (ctx: Context) => html.base.layout("Login", [
  tags.main({ class: 'auth auth-login box box-pad' }, [
    tags.h1(['Login']),
    tags.div({ class: 'alternative' }, [
      //tags.a({ href: '/auth/guest', class: 'guest' }, ['Continue as guest']),
      tags.a({ href: '/auth/lila', class: 'lila' }, ['Login with Lichess'])
    ])
  ])
], {
  moreCss: tags.frag([
    h.cssTag('auth')
  ])
})(ctx);
