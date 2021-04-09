import { Coll, WithId } from './coll';

export default abstract class Db {

  dbName: string
  prefix: string
  
  constructor(dbName: string, prefix: string) {
    this.dbName = dbName;
    this.prefix = prefix;
  }

  abstract apply<A extends WithId>(name: string): Coll<A>
}
