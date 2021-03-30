import Db from './db';
import Configuration from '../../app/config';

export class Env {

  collPrefix: string

  constructor(config: Configuration) {
    this.collPrefix = config.mode === 'development' ? 'dev-' : '';
  }

  db(name: string) {
    return new Db(name, this.collPrefix);
  }
  
}
