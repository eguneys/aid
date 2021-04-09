import { WithId, Coll } from './coll';

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

export class MemCol<A extends WithId> extends Coll<A> {

  data: Array<A>

  constructor(name: string) {
    super();

    this.data = [];
  }

  one(query: any) {
    return Promise.resolve(this.data.find(fFind(query)));
  }
  
  find(query: any) {
    return Promise.resolve(this.data.filter(fFind(query)));
  }

  insert(_: A) {
    return Promise.resolve()
      .then(() => this.data.push(_))
      .then(() => {})
  }

  delete(id: string) {
    return Promise.resolve()
      .then(() => this.data = this.data.filter(_ => _.id !== id))
      .then(() => {});
  }

  update(id: string, update: any) {
    let _update = fUpdate(update);
    return Promise.resolve()
      .then(() =>
        this.data.filter(fFind({id})).forEach(_update))
      .then(() => {});
  }
  
}
