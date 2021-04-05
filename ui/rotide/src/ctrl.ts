import { api as EsApi } from 'escsh';
import * as kApi from './xhr';
import { defaultMd } from './fixtures';
import { default as BarCtrl } from './bar/ctrl';
import { Redraw } from './types';
import { kbt } from 'koob';

export default class Ctrl {

  esApi!: EsApi
  content: Maybe<kbt.Content>
  unsavedMd: string = defaultMd
  hasUnsavedChanges: boolean = true
  barCtrl: BarCtrl
  redraw: Redraw
  
  constructor(redraw: Redraw) {
    this.redraw = redraw;
    this.barCtrl = new BarCtrl(this, redraw);
  }

  loadContent(content: kbt.Content) {
    this.content = content;
    this.setUnsavedMd(content.content, true);
  }

  setUnsavedMd(value: string, original: boolean = false) {
    this.unsavedMd = value;
    this.hasUnsavedChanges = !original;
    // this.esApi.md(this.unsavedMd);
    this.redraw();
  }

  saveContent() {
    if (this.content) {
      return kApi.updateContent(this.content.id, this.unsavedMd).then(() => {
        this.hasUnsavedChanges = false;
      });
    }
    return Promise.reject();
  }

  setEscsh(eApi: EsApi) {
    this.esApi = eApi;
  }
  
}
