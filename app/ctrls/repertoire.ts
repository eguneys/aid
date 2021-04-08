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

    Promise.all([this.env.book.api.list(sessionId, ctx.me),
                 this.env.book.api.featured()]).then(([books, featured]) =>
                   res.send(html.repertoire.all({ books, featured })(ctx)));
  }

}
