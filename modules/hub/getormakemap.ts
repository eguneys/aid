export type Loader<Value> = (key: string) => Value

export type CacheConfig<Value> = {
  loader: Loader<Value>
};

export class GetOrMakeMap<Value> {

  data: Map<string, Value>
  loader: Loader<Value>
  
  constructor(options: CacheConfig<Value>) {

    this.loader = options.loader;
    
    this.data = new Map<string, Value>();
  }

  has(k: string) { return this.data.has(k); }

  size() { return this.data.size };

  delete(k: string, lastWill: (_: Value) => void) {
    let res = this.data.get(k);

    if (res) {
      lastWill(res);
      return this.data.delete(k);
    }
  }

  get(k: string) {
    let v = this.data.get(k);

    if (v !== undefined) {
      return v;
    } else {
      let _v = this.loader(k);
      this.data.set(k, _v);

        return _v;
    }
  }
  
}
