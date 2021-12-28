import { Env, EnvAwait } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';

export default class Opening extends ChestCtrl {
  
  constructor(env: Env, env2: EnvAwait) {
    super(env, env2);
  }

  show = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    this.opFuResult(this.env.opening
      .api.opening_with_chapters(req.params.id),
      res, next, opening_with_chapters =>
      html.opening.show(opening_with_chapters)(ctx)
    )(ctx)
  }




  addf = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

  }

  add = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    this.authUser(req, res, user =>
      this.env2.lila.study
      .sanitize_fetch_link_to_pgn(user, req.body.link)
      .then(pgn =>
        pgn ? this.env.opening.api
        .create_from_pgn(user, pgn)
        .then(opening => res.send({redirect: `opening/${opening.id}` })) :
        res.send({error: 'dont parse pgn' })
      ))(ctx)
  }


  home = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    let mine: any = ctx.me ? await this.env.opening.api
      .byUser(ctx.me) : [],
      featured: any = [1]

    res.send(html.opening.home(mine, featured)(ctx))
  }
}
