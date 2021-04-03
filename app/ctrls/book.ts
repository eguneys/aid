import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';
import { kbt } from 'koob';
import * as chest from '../../modules';
import { e } from '../../modules/common';

export default class BookCtrl extends ChestCtrl {

  constructor(env: Env) {
    super(env);
  }

  async all(req: any, res: any) {
    let ctx: any = await this.reqToCtx(req);
    this.env.book.pager.all().then((books: Array<kbt.Book>) =>
      res.send(books));
    //res.send(html.book.all([])(ctx));
  }

  async add(req: any, res: any) {
    let ctx: any = await this.reqToCtx(req);

    e.fold(chest.book.form.book(req.body),
           _ => this.env.book.api.create(_)
             .then(_ => res.send(_)),
           err => res.send(err))
  }

  
  async chapters(req: any, res: any) {
    let ctx: any = await this.reqToCtx(req);

    let { bookId } = req.params;
    
    this.env.book.pager.chapters(bookId).then(chapters => {
      res.send(chapters);
    });
  }

  
  async addChapter(req: any, res: any) {
    let ctx: any = await this.reqToCtx(req);

    e.fold(chest.book.form.chapter(req.body),
           _ => this.env.book.api.createChapter(_)
             .then(_ => res.send(_)),
           err => res.send(err))
  }

  async sections(req: any, res: any) {
    let ctx: any = await this.reqToCtx(req);

    let { chapterId } = req.params;
    
    this.env.book.pager.sections(chapterId).then(sections => {
      res.send(sections);
    });
  }

  async addSection(req: any, res: any) {
    let ctx: any = await this.reqToCtx(req);

    e.fold(chest.book.form.section(req.body),
           _ => this.env.book.api.createSection(_)
             .then(_ => res.send(_)),
           err => res.send(err))
  }

}
