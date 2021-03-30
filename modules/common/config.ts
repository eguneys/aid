export type NetConfigParams = {
  domain: string,
  prodDomain: string,
  minifiedAssets: boolean
}

export class NetConfig {

  isProd: boolean
  minifiedAssets: boolean
  domain!: string
  assetDomain!: string
  assetBaseUrl!: string
  protocol: string
  
  constructor({
    domain,
    prodDomain,
    minifiedAssets
  }: NetConfigParams) {

    this.isProd = domain === prodDomain;
    this.minifiedAssets = minifiedAssets;

    this.domain = domain;
    this.protocol = this.isProd ? 'https://':'http://';

    this.assetDomain = this.domain;
    this.assetBaseUrl = this.protocol + this.domain;
  }
}
