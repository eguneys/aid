import Db from './db';
import { MemCol } from './memcoll';
import { BSONId, DocId, defaultBsonHandler } from './bson';

export default class MemDb extends Db {

  constructor(dbName: string,
              prefix: string) {
    super(dbName, prefix);
  }

  apply<A extends DocId>(name: string, bson: BSONId<A> = defaultBsonHandler<A>()): MemCol<A> {
    return new MemCol<A>(name, bson);
  }

}
