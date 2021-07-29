import config from '../conf/app';
import { NetConfig } from '../modules/common';

export default class Configuration {

  mode: string
  net: NetConfig

  constructor(mode: string) {
    
    this.mode = mode;

    this.net = new NetConfig(config.net, this.mode)
  }

}
