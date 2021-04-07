import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';
import * as chest from '../../modules';
import { Context } from '../../modules/api';

export default class Content extends ChestCtrl {

  constructor(env: Env) {
    super(env);
  }

  async show(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    let { contentId } = req.params;

    this.opFuResult(this.env.book.api.contentm(contentId),
                    res, _ => html.repertoire.content(_)(ctx))(ctx);
    
  }

  
}
