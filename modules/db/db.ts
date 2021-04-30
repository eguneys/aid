import { Coll } from './coll';
import { DocId, BSONId, defaultBsonHandler } from './bson';

export default abstract class Db {

  dbName: string
  prefix: string
  
  constructor(dbName: string, prefix: string) {
    this.dbName = dbName;
    this.prefix = prefix;
  }

  abstract apply<A extends DocId>(name: string, bson?: BSONId<A>): Coll<A>
}
