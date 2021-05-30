import { Env } from '../env';
import * as html from '../views';
import ChestCtrl from './chest';
import { Context } from '../../modules/api';
import { SessionId } from '../../modules/security/session';
import * as chest from '../../modules';
import { AnalyseOptions } from 'shared_options';
import { Node } from '../../modules/tree';

export default class Study extends ChestCtrl {
  
  constructor(env: Env) {
    super(env);
  }

  async list(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    res.send(html.study.all()(ctx));
  }

  async mine(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);

    res.send(html.study.mine()(ctx));
  }

  async create(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);
    this.authSession(req, res, sessionId =>
      this.createStudy(ctx, req, res, sessionId))(ctx);
  }

  private createStudy(ctx: Context, req: any, res: any, sessionId: SessionId) {

    chest.study.StudyForm.importGame.form(req.body)
      .unwrap(data =>
        this.env.study.api.importGame(chest.study.StudyMaker.ImportGame(data), sessionId).then(_ => {
          if (_) {
            res.redirect(`/study/${_.study.id}`);
          } else {
            this.notFound(ctx, req, res);
          }
        }),
              err => res.redirect('/study/mine'));
  }


  async show(req: any, res: any) {
    let ctx: Context = await this.reqToCtx(req);
    
    let { id } = req.params;
    
    this.opFuResult(this.env.study.api.byIdWithChapter(id), res,
                    oldSc =>
      this.getJsonData(oldSc, ctx).then(([sc, opts]) =>
        this.negotiate(() => {
          this.env.study.version(sc.study.id).then(sVersion =>
            res.send(html.study.show(sc.study, opts, sVersion)(ctx)));
        }, () => ({}))(ctx)))(ctx);
  }

  private getJsonData(sc: chest.study.StudyWithChapter, ctx: Context): Fu<[chest.study.StudyWithChapter, Partial<AnalyseOptions>]> {
    return this.env.study.chapterRepo
      .orderedMetadataByStudy(sc.study.id)
      .then(chapters => {
        let { study, chapter } = sc;
      
        return this.env.study.jsonView.apply(study, chapters, chapter, ctx.me)
          .then(studyJson =>
            [chest.study.StudyWithChapter.make(study, chapter), {
              study: studyJson,
              data: {
                treeParts: Node.partitionTreeJsonWriter.write(
                  chest.study.TreeBuilder.make(chapter.root)
                )
              }
            }]);
      });
     
  }

  

}
