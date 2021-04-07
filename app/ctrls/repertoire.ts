import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';

export default class Repertoire extends ChestCtrl {
  
  constructor(env: Env) {
    super(env);
  }

  async all(req: any, res: any) {
    let ctx: any = await this.reqToCtx(req);

    let { sessionId } = req.session;

    this.env.book.api.list(sessionId, ctx.me).then(data =>
      res.send(html.repertoire.all(data)(ctx)));
  }

}
