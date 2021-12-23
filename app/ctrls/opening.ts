import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';

export default class Opening extends ChestCtrl {
  
  constructor(env: Env) {
    super(env);
  }

  home = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    res.send(html.opening.home()(ctx));
  }
}
