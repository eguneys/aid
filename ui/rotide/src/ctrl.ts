import { api as EsApi } from 'escsh';
import * as kApi from './xhr';
import { defaultMd, defaultContent } from './fixtures';
import { default as BarCtrl } from './bar/ctrl';
import { noop, Invalidate, Redraw, RotideOpts } from './types';
import { kbt } from 'koob';

export default class Ctrl {

  esApi!: EsApi
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
    // this.esApi.md(this.unsavedMd);
  }

  saveContent() {
    return kApi.updateContent(this.content.id, this.unsavedMd).then(_ => {
      if (_.err) {
        chest.redirect('/auth');
      } else {
        this.invalidateContent?.();
        this.loadContent(_, noop);
      }
    });
  }

  setEscsh(eApi: EsApi) {
    this.esApi = eApi;
  }
  
}
