import { env as helperEnv } from './views/helper';

export class Env {

  mode: string
  isProd: boolean
  minifiedAssets: boolean
  domain!: string
  assetDomain!: string
  assetBaseUrl!: string
  
  constructor(mode: string) {

    this.mode = mode;
    this.isProd = mode === 'production';
    this.minifiedAssets = this.isProd;

    this.domain = this.isProd ? 'https://chessishard.com' :
      'http://localhost:3000';

    this.assetDomain = this.domain;
    this.assetBaseUrl = this.isProd ? this.domain : '';


  }

  async awaitVariables() {
    
  }
}

export default class EnvBoot {

  env: Env

  constructor(mode: string) {
    
    this.env = new Env(mode);

    helperEnv.setEnv(this.env);
  }
}
