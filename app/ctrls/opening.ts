import { Env, EnvAwait } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';

export default class Opening extends ChestCtrl {
  
  constructor(env: Env, env2: EnvAwait) {
    super(env, env2);
  }

  addf = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

  }

  add = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    this.authUser(req, res, user =>
      this.opFuResult(this.env2.lila.study
        .sanitize_fetch_link_to_pgn(user, 
          req.body.link),
       res, next, pgn => this.env.opening.api
        .create_from_pgn(user, pgn)
        .then(opening => ({redirect: `opening/${opening.id}` }))
       )(ctx)
    )(ctx)
  }


  home = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    let mine: any = ctx.me ? await this.env.opening.api
      .byUser(ctx.me) : [],
      featured: any = [1]

    res.send(html.opening.home(mine, featured)(ctx))
  }
}
