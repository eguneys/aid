import { api as EsApi } from 'escsh';
import { defaultMd } from './fixtures';
import { default as BarCtrl } from './bar/ctrl';
import { Redraw } from './types';

export default class Ctrl {

  esApi!: EsApi
  md: string
  barCtrl: BarCtrl
  redraw: Redraw
  
  constructor(redraw: Redraw) {
    this.md = defaultMd;
    this.barCtrl = new BarCtrl(redraw);
    this.redraw = redraw;
  }

  input(value: string) {
    this.esApi.md(value);
  }

  setEscsh(eApi: EsApi) {
    this.esApi = eApi;
  }
  
}
