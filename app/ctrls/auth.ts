import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';
import * as chest from '../../modules';
import { Context } from '../../modules/api';

export default class AuthCtrl extends ChestCtrl {

  constructor(env: Env) {
    super(env);
  }

  async login(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    if (ctx.me) {
      res.redirect('/');
    } else {
      res.send(html.site.guest()(ctx));
    }
  }
  
  async guest(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);


    this.env.security.api.anonymousSessionId().then(sessionId => {
      req.session.sessionId = sessionId;
      res.redirect('/');
    });
  }


  
}
