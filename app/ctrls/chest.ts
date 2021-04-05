import { Env } from '../env';
import { Context, PageData, PageDataAnon } from '../../modules/api';
import { UserContext } from '../../modules/user';
import { random as nonceRandom } from '../../modules/common';

export default class ChestCtrl {
  env: Env

  constructor(env: Env) {
    this.env = env;
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
