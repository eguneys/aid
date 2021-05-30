export type NetConfigParams = {
  project: string,
  domain: string,
  prodDomain: string,
  minifiedAssets: boolean
}

export class NetConfig {

  project: string
  isProd: boolean
  minifiedAssets: boolean
  domain!: string
  assetDomain!: string
  assetBaseUrl!: string
  protocol: string
  socketDomains: string[]
  
  constructor({
    project,
    domain,
    prodDomain,
    minifiedAssets
  }: NetConfigParams) {

    this.project = project;
    
    this.isProd = domain === prodDomain;
    this.minifiedAssets = minifiedAssets;

    this.domain = domain;
    this.protocol = this.isProd ? 'https://':'http://';

    this.assetDomain = this.domain;
    this.assetBaseUrl = this.protocol + this.domain;

    this.socketDomains = [this.domain];
  }
}
