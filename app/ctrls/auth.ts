import { Env, EnvAwait } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';
import * as chest from '../../modules';
import { Context } from '../../modules/api';
import { withSessionId } from '../../modules/common/cookie';

export default class AuthCtrl extends ChestCtrl {

  env2: EnvAwait
  
  constructor(env: Env,
              env2: EnvAwait) {
    super(env);

    this.env2 = env2;
  }

  logout = async (req: any, res: any) => {
    let ctx: Context = await this.reqToCtx(req);

    req.session.sessionId = undefined;

    res.redirect('/auth');
  }
  
  login = async (req: any, res: any) => {
    let ctx: Context = await this.reqToCtx(req);

    if (ctx.me) {
      res.redirect('/');
    } else {
      res.send(html.site.guest()(ctx));
    }
  }

  lila = async (req: any, res: any, next: any) => {
    let ctx: Context = await this.reqToCtx(req);

    let auth_uri = await this.env2.lila.auth.authorizationUri(req)
    res.redirect(auth_uri)
  }

  lilaCallback = async (req: any, res: any, next: any) => {
    let ctx: Context = await this.reqToCtx(req);
    
    let authResult = this.env2.lila.auth.exchangeCode(req, req.query.code)
    
    this.opFuResult(authResult, res, next, user =>
      this.env.user.api.getOrCreate(user).then(_ =>
        this.env.security.api.saveSession(_).then(sessionId => {
          req.session.sessionId = sessionId;
          withSessionId(res, sessionId).redirect('/');
        })))(ctx);

  }
//   
//   guest = async (req: any, res: any) => {
//     let ctx: Context = await this.reqToCtx(req);
// 
//     let mockSteam = this.env2.lila.auth.mockProfile;
//     
//     this.env.user.api.getOrCreate(mockSteam).then(_ =>
//       this.env.security.api.saveSession(_).then(sessionId => {
//         req.session.sessionId = sessionId;
//         withSessionId(res, sessionId).send(
//           mockSteam
//         );
//       }));
// 
//   }
// 
  
}
