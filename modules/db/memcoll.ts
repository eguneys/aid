import { Coll } from './coll';

export class MemCol extends Coll {
  
  data: Array<any>

  constructor(name: string) {
    super(name);

    this.data = [];
  }

  find(query: any) {
    return Promise.resolve(this.data.filter(_ => {
      for (let key of Object.keys(query)) {
        if (_[key] !== query[key]) {
          return false;
        }
      }
      return true;
    }));
  }

  insert(_: any) {
    return Promise.resolve()
      .then(() => this.data.push(_))
      .then(() => _);
  }

}
