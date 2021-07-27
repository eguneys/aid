import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';
import { funit } from '../../modules/common';

export default class Round extends ChestCtrl {
  
  constructor(env: Env) {
    super(env);
  }


  player = async (req: any, res: any) => {
    let ctx: any = await this.reqToCtx(req);

    const { fullId } = req.params;
    
    this.opFuResult(this.env.round.proxyRepo.pov(fullId),
                    res, pov => this.env.round.jsonView.apply(pov).then(data => {
                      res.send(html.round.player(data)(ctx));
                    }))(ctx);
  }
}
