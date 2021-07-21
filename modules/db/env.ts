import FireDb from './firedb';
import MemDb from './memdb';
import Configuration from '../../app/config';

export class Env {

  collPrefix: string

  constructor(config: Configuration) {
    this.collPrefix = config.mode === 'development' ? 'dev' : 'prod';
  }

  db(name: string) {
    return new FireDb(name, this.collPrefix);
  }
  
}
