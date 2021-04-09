import { Env } from '../env';
import * as html from '../views';
import { Context, PageData, PageDataAnon } from '../../modules/api';
import { UserContext } from '../../modules/user';
import { random as nonceRandom } from '../../modules/common';
import * as chest from '../../modules';
import { kba } from 'koob';

export default class ChestCtrl {
  env: Env

  constructor(env: Env) {
    this.env = env;
  }

  authSession(req: any, res: any, op: (sessionId: kba.SessionId) => void) {
    return (ctx: Context) => {
      let { sessionId } = ctx;
      if (!sessionId) {
        this.negotiate(() => res.redirect(401, '/auth'),
                       () => res.status(401).send({redirect:'/auth'}))(ctx);
      } else {
        op(sessionId);
      }
    }
  }

  open<A>(fua: Fu<A>, res: any) {
    fua.then(_ => res.send(_));
  }

  ok(fua: Fu<void>, res: any) {
    fua.then(() => res.send({ok: true}));
  }
  
  opFuResult<A>(fua: Fu<Maybe<A>>, res: any, op: (a: A) => any = _ => _) {
    return (ctx: Context) =>
      fua.then(_ => {
        if (_) {
          res.send(op(_));
        } else {
          res.status(404).send(
            this.negotiate(() => html.base.notFound()(ctx),
                           () => ({err: 'Resource not found' }))(ctx));
        }
      });
  }

  negotiate(html: () => any, api: () => any) {
    return (ctx: Context) => {
      let v = chest.api.mobile.requestVersion(ctx.req)
      return v ? api() : html();
    }
  }

  async reqToCtx(req: any) {
    return this.restoreUser(req).then(u => {
      let ctx = new UserContext(req, u)
      return this.pageDataBuilder(ctx).then(_ =>
        new Context(ctx, _));
    });
  }

  async restoreUser(req: any) {
    return this.env.security.api.restoreUser(req);
  }

  async pageDataBuilder(ctx: UserContext): Promise<PageData> {
    let nonce = nonceRandom();
    return !ctx.me ? PageDataAnon(nonce) : PageData(nonce);
  }
}
