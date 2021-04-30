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
}
