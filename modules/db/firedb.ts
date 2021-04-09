import { Firestore } from '@google-cloud/firestore';
import FireColl from './firecoll';
import Db from './db';
import { WithId } from './coll';

export default class FireDb extends Db {

  firestore: Firestore
  
  constructor(dbName: string,
              prefix: string) {
    super(dbName, prefix);

    this.firestore = new Firestore();
  }

  apply<A extends WithId>(name: string) {
    return new FireColl<A>(
      this.firestore
        .collection(`${this.prefix}.${this.dbName}.${name}`));
  }

}
