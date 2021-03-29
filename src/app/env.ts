import express from 'express';

export default class Env {

  app: express.Application
  isProd: boolean
  minifiedAssets: boolean
  domain!: string
  assetDomain!: string
  assetBaseUrl!: string
  
  constructor(app: express.Application) {
    this.app = app;

    this.isProd = app.get('env') === 'production';
    this.minifiedAssets = this.isProd;

    this.domain = this.isProd ? 'https://chessishard.com' :
      'http://localhost:3000';

    this.assetDomain = this.domain;
    this.assetBaseUrl = this.isProd ? this.domain : '';


  }

  async awaitVariables() {
    
  }
}
