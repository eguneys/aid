import { Env, EnvAwait } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';

export default class Opening extends ChestCtrl {

  
  constructor(env: Env, env2: EnvAwait) {
    super(env, env2);
  }


  reset = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    let openingId = req.params.id
    /*
    this.env2.opening.api.opening_reset_progress(user, openingId).then(_ => {
      res.send({ok: true})
    })
    */
    this.authUser(req, res, async user => {
      let opening = await this.env2.opening.api.opening_byid(req.params.id)
      if (!opening) {
        res.send({err: 'not found'})
        return
      }
      await this.env2.opening.api.opening_delete(opening.id, user)
      let idpgn = await this.env2.lila.study
      .sanitize_fetch_link_to_pgn(user, 'https://lichess.org/study/'+opening.studyId)
      if (idpgn) {
        let new_opening = await this.env2.opening.api
          .create_from_pgn(user, idpgn[0], idpgn[1], opening.id)
        if (new_opening) {
          res.send({ok: true})
        } else {
          res.send({error: 'dont parse pgn' })
        }
      }
    })(ctx)

  }


  refresh = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    let openingId = req.params.id
    this.authUser(req, res, user =>
      this.env2.opening.api.opening_refresh_games(user, openingId).then(_ => {
        if (_) {
         this.env2.opening
            .api.opening_with_chapters(openingId).then(ocs => {
              if (ocs) {
                let [o, chapters] = ocs
                let [since, nb_games] = _
                res.send({since, nb_games, chapters})
              }
            })
        } else {
          res.send({err: 'no games'})
        }
      })
    )(ctx)
  }


  remove = async (req: any, res: any, next: any) => {

    let ctx: any = await this.reqToCtx(req);

    this.authUser(req, res, user =>
      this.env2.opening.api.opening_delete(req.params.id, user)
      .then(_ => res.send({ok: true }))
    )(ctx)

  }

  show = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    this.opFuResult(this.env2.opening
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
      .then(idpgn =>
        idpgn ? this.env2.opening.api
        .create_from_pgn(user, idpgn[0], idpgn[1])
        .then(opening => res.send({redirect: `opening/${opening.id}` })) :
        res.send({error: 'dont parse pgn' })
      ).catch(err => res.send({err})))(ctx)
  }


  home = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    let mine: any = ctx.me ? await this.env2.opening.api
      .byUser(ctx.me) : [],
      featured: any = [1]

    res.send(html.opening.home(mine, featured)(ctx))
  }
}
