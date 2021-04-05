import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';

export default class Site extends ChestCtrl {
  
  constructor(env: Env) {
    super(env);
  }

  async notFound(req: any, res: any, next: any) {
    let ctx: any = await this.reqToCtx(req);

    if (!req.route) {
      res.status(404).send(html.base.notFound()(ctx));
    } else {
      next();
    }
  }

  async editor(req: any, res: any) {
    let ctx: any = await this.reqToCtx(req);

    let { sessionId } = req.session;

    this.env.api.bookApi.editor(ctx.me, sessionId).then(data =>    
      res.send(html.site.editor(data)(ctx)));
  }

}
