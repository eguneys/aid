import { Env, EnvAwait } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';
import * as chest from '../../modules';
import { Context } from '../../modules/api';

export default class AuthCtrl extends ChestCtrl {

  env2: EnvAwait
  
  constructor(env: Env,
              env2: EnvAwait) {
    super(env);

    this.env2 = env2;
  }

  async login(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    if (ctx.me) {
      res.redirect('/');
    } else {
      res.send(html.site.guest()(ctx));
    }
  }

  async lichess(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    res.redirect(this.env2.lila.auth.authorizationUri);
  }
  
  async guest(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);


    this.env.security.api.anonymousSessionId().then(sessionId => {
      req.session.sessionId = sessionId;
      res.redirect('/');
    });
  }

  async callback(req: any, res: any, next: any) {
    let ctx: Context = await this.reqToCtx(req);

    this.env2.lila.auth
      .exchangeCode(req.query.code)
      .then(user =>
        this.env.user.api.save(user).then(_ =>
          this.env.security.api.saveSession(_).then(sessionId => {
            req.session.sessionId = sessionId;
            res.redirect('/');
          })))
      .catch(err => next(err));
    
    
  }


  
}
