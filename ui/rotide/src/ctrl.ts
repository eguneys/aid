import { api as CsApi } from 'csdm';
import * as kApi from './xhr';
import { defaultMd, defaultContent } from './fixtures';
import { default as BarCtrl } from './bar/ctrl';
import { noop, Invalidate, Redraw, RotideOpts } from './types';
import { kbt } from 'koob';

export default class Ctrl {

  csApi!: CsApi
  invalidateContent: Invalidate = noop
  content: kbt.Content
  unsavedMd: string = defaultMd
  barCtrl: BarCtrl
  redraw: Redraw
  
  constructor(opts: RotideOpts, redraw: Redraw) {
    this.redraw = redraw;

    this.content = opts.data.content || defaultContent;
    this.setUnsavedMd(this.content.content);
    
    this.barCtrl = new BarCtrl(this, redraw);
  }

  hasUnsavedChanges() {
    return this.unsavedMd !== this.content.content;
  }
  
  loadContent(content: kbt.Content, invalidateContent: Invalidate) {
    this.invalidateContent = invalidateContent;
    this.content = content;
    this.setUnsavedMd(content.content);
  }

  setUnsavedMd(value: string) {
    this.unsavedMd = value;
    this.csApi?.md(this.unsavedMd);
  }

  saveContent() {
    return kApi.updateContent(this.content.id, this.unsavedMd).then(_ => {
      if (_.redirect) {
        chest.redirect(_.redirect);
      } else {
        this.invalidateContent?.();
        this.loadContent(_, noop);
      }
    });
  }

  setCsApi(csApi: CsApi) {
    this.csApi = csApi;
  }
  
}
