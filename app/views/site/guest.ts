import tags from '../tags';
import * as html from '../';
import * as h from '../helper';
import { Context } from '../../../modules/api';


export const guest = () => (ctx: Context) => html.base.layout("Login as Guest", [
  tags.main({ class: 'auth auth-login box box-pad' }, [
    tags.h1(['Guest Login']),
    tags.div({ class: 'alternative' }, [
      //tags.a({ href: '/auth/guest', class: 'guest' }, ['Continue as guest']),
      tags.a({ href: '/auth/steam', class: 'steam' }, ['Login with Steam'])
    ])
  ])
], {
  moreCss: tags.frag([
    h.cssTag('auth')
  ])
})(ctx);
