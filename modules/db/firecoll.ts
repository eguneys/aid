import { CollectionReference,
         DocumentSnapshot,
         Query,
         QuerySnapshot,
         QueryDocumentSnapshot } from '@google-cloud/firestore';
import { Coll, WithId } from './coll';

const fQuery = (query: any) => (coll: CollectionReference) => {
  let _query: CollectionReference | Query = coll;
  for (let key in query) {
    if (query[key] !== undefined) {
      _query = _query.where(key, '==', query[key]);
    }
  }
  return _query;
};

export default class FireCol<A extends WithId> extends Coll<A> {

  coll: CollectionReference
  
  constructor(coll: CollectionReference) {
    super();

    this.coll = coll;
  }

  $doc(doc: DocumentSnapshot): A {
    return {
      id: doc.id,
      ...doc.data()
    } as A;
  }

  byId(id: string) {
    return this.coll.doc(id).get()
      .then(_ => _.exists && this.$doc(_));
  }
  
  one(query: any) {
    return fQuery(query)(this.coll)
      .get().then((qSnapshot: QuerySnapshot) => {
        if (qSnapshot.docs.length > 0) {
          return this.$doc(qSnapshot.docs[0])
        }
      });
  }
  
  find(query: any) {
    return fQuery(query)(this.coll).get().then((qSnapshot: QuerySnapshot) => {
      let res: Array<A> = [];
      qSnapshot.forEach((dSnapshot: QueryDocumentSnapshot) =>
        res.push(this.$doc(dSnapshot)));
      return res;                        
    });
  }

  insert(_: A) {
    return this.coll
      .doc(_.id).set(delUndefined(_))
      .then(() => {});
  }

  delete(id: string) {
    return this.coll
      .doc(id).delete()
      .then(() => {});
  }

  update(id: string, update: any) {
    return this.coll
      .doc(id).update(update)
      .then(() => {});
  }
  
}

function delUndefined(_: any) {
  for (let key in _) {
    if (_[key] === undefined) {
      delete _[key];
    }
  }
  return _;
}
