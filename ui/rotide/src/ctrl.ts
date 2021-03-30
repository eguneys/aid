import { api as EsApi } from 'escsh';

export default class Ctrl {

  esApi!: EsApi

  constructor() {}

  input(value: string) {
    this.esApi.md(value);
  }

  setEsApi(esApi: EsApi) {
    this.esApi = esApi; 
  }
}
