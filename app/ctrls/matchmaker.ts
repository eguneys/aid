import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';

export default class Matchmaker extends ChestCtrl {
  
  constructor(env: Env) {
    super(env);
  }


  list = async (req: any, res: any) => {
    let ctx: any = await this.reqToCtx(req);

    res.send(html.matchmaker.list()(ctx));
    
  }

  showCsGo = async (req: any, res: any) => {
    let ctx: any = await this.reqToCtx(req);

    res.send(html.matchmaker.showCsGo()(ctx));
  }
}
