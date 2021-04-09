import Db from './db';
import { MemCol } from './memcoll';
import { WithId } from './coll';

export default class MemDb extends Db {

  constructor(dbName: string,
              prefix: string) {
    super(dbName, prefix);
  }

  apply<A extends WithId>(name: string) {
    return new MemCol<A>(name);
  }

}
