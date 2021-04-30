import { Firestore } from '@google-cloud/firestore';
import FireColl from './firecoll';
import Db from './db';
import { DocId, BSONId, defaultBsonHandler } from './bson';

export default class FireDb extends Db {

  firestore: Firestore
  
  constructor(dbName: string,
              prefix: string) {
    super(dbName, prefix);

    this.firestore = new Firestore();
  }

  apply<A extends DocId>(name: string, bson: BSONId<A> = defaultBsonHandler<A>()) {
    return new FireColl<A>(
      this.firestore
        .collection(`${this.prefix}/${this.dbName}/${name}`),
      bson);
  }

}
