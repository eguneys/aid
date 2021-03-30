import { Coll } from './coll';

export class MemCol extends Coll {
  
  data: Array<any>

  constructor(name: string) {
    super(name);

    this.data = [];
  }

  find() {
    return Promise.resolve(this.data);
  }

  insert(_: any) {
    return Promise.resolve()
      .then(() => this.data.push(_))
      .then(() => {});
  }

}
