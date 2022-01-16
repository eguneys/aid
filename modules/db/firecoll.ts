import { CollectionReference,
  DocumentSnapshot,
  FieldValue,
  Query,
  QuerySnapshot,
  QueryDocumentSnapshot } from '@google-cloud/firestore';
import { Coll } from './coll';
import { BSON, BSONId, DocId } from './bson';

const fQuery = (query: any) => (coll: CollectionReference) => {
  let _query: CollectionReference | Query = coll;
  for (let key in query) {
    if (query[key] !== undefined) {
      _query = _query.where(key, '==', query[key]);
    }
  }
  return _query;
};

const fProjection = (projection: any) => (_: any) => {
  let res: any = {};
  for (let key in projection) {
    res[key] = _[key];
  }
  return res;
};

export default class FireCol<A> extends Coll<A> {

  coll: CollectionReference
  
  constructor(coll: CollectionReference, bson: BSONId<A>) {
    super(bson);

    this.coll = coll;
  }

  $project<B>(doc: DocumentSnapshot, projection: any, bson: BSON<B>): B {
    return bson.read(fProjection(projection)({
      id: doc.id,
      ...doc.data()
    }));
  }
  
  $doc(doc: DocumentSnapshot): A {
    return this.read({
      id: doc.id,
      ...doc.data()
    })!;
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

  findProjection<B>(query: any, projection: any, bson: BSON<B>) {
    return fQuery(query)(this.coll).get().then((qSnapshot: QuerySnapshot) => {
      let res: Array<B> = [];
      qSnapshot.forEach((dSnapshot: QueryDocumentSnapshot) =>
        res.push(this.$project<B>(dSnapshot, projection, bson)));
      return res;                        
    });
  }

  insert(_: A) {
    let doc = this.write(_)!;
    return this.coll
      .doc(doc.id).set(doc)
      .then(() => {});
  }

  set(id: string, _: A) {
    let doc = this.write(_)!;
    return this.coll
      .doc(doc.id).set(doc)
      .then(() => {});
  }

  delete(id: string) {
    return this.coll
      .doc(id).delete()
      .then(() => {});
  }

  deleteByQuery(query: any) {
    return fQuery(query)(this.coll).get().then((qSnapshot: QuerySnapshot) => {
      qSnapshot.forEach((dSnapshot: QueryDocumentSnapshot) =>
        dSnapshot.ref.delete()
      )
    });
  }
  
  increment(id: string, field: string) {
    return this.coll
    .doc(id).update({
      [field]: FieldValue.increment(1)
    })
    .then(() => {})
  }

  updateById(id: string, update: any) {
    return this.coll
      .doc(id).update(update)
      .then(() => {});
  }

  updateByQuery(query: any, update: any) {
    return fQuery(query)(this.coll).get().then((qSnapshot: QuerySnapshot) => {
      qSnapshot.forEach((dSnapshot: QueryDocumentSnapshot) =>
        dSnapshot.ref.update(update)
      )
    });
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
