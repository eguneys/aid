import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';
import { Book } from '../../modules/book/types';

export default class BookCtrl extends ChestCtrl {
  
  constructor(env: Env) {
    super(env);
  }

  async all(req: any, res: any) {
    let ctx: any = await this.reqToCtx(req);
    this.env.book.pager.all().then((books: Array<Book>) =>
      res.send(books));
    //res.send(html.book.all([])(ctx));
  }

}
