import { Coll } from './coll';
import { BSON, BSONId, DocId } from './bson';

const fUpdate = (update: any) => (_: any) => {
  for (let key of Object.keys(update)) {
    _[key] = update[key];
  }
}

const fFind = (query: any) => (_: any) => {
  for (let key of Object.keys(query)) {
    if (_[key] !== query[key]) {
      return false;
    }
  }
  return true;
}

const fProjection = (projection: any) => (_: any) => {
  let res: any = {};
  for (let key in projection) {
    res[key] = _[key];
  }
  return res;
};

export class MemCol<A> extends Coll<A> {

  data: Array<DocId>

  constructor(name: string, bson: BSONId<A>) {
    super(bson);

    this.data = [];
  }

  one(query: any) {
    return Promise
      .resolve(this.data.find(fFind(query)))
      .then(_ => this.read(_));
  }
  
  find(query: any) {
    return Promise
      .resolve(this.data.filter(fFind(query)).map(_ => this.read(_)!))
  }

  findProjection<B>(query: any, projection: any, bson: BSON<B>) {
    return Promise
      .resolve(this.data.filter(fFind(query))
      .map(fProjection(projection))
      .map(_ => bson.read(_)!));
  }

  insert(_: A) {
    return Promise.resolve()
      .then(() => this.data.push(this.write(_)!))
      .then(() => {})
  }

  set(id: string, update: any) {
    return Promise.reject('not implemented');
  }

  delete(id: string) {
    return Promise.resolve()
      .then(() => this.data = this.data.filter(_ => _.id !== id))
      .then(() => {});
  }

  deleteByQuery(query: any) {
    return Promise.resolve()
    .then(() => this.data = this.data.filter(fFind(query)))
    .then(() => {})
  }

  updateById(id: string, update: any) {
    let _update = fUpdate(update);
    return Promise.resolve()
      .then(() =>
        this.data.filter(fFind({id})).forEach(_update))
      .then(() => {});
  }
 
  updateByQuery(query: any, update: any) {
    let _update = fUpdate(update);
    return Promise.resolve()
      .then(() =>
        this.data.filter(fFind(query)).forEach(_update))
      .then(() => {});
  }
   
}
