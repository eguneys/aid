import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';

export default class Opening extends ChestCtrl {
  
  constructor(env: Env) {
    super(env);
  }

  addf = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);
  }

  add = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    let lilink = await sanitize_fetch_link(req.body.link)


    console.log(lilink)

  }


  home = async (req: any, res: any, next: any) => {
    let ctx: any = await this.reqToCtx(req);

    let mine: any = [],
      featured: any = [1]

    res.send(html.opening.home(mine, featured)(ctx))
  }
}
