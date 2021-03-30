import { MemCol } from './memcoll';

export default class Db {

  dbName: string
  prefix: string
  
  constructor(dbName: string, prefix: string) {
    this.dbName = dbName;
    this.prefix = prefix;
  }

  apply(name: string) {
    return new MemCol(name);
  }
}
