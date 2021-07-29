export class HashMap<Key, Value> {

  data: Map<Key, Value>
  
  constructor() {
    this.data = new Map();
  }

  compute(key: Key, fn: (_: Key, value: Value | undefined) => Value) {
    let value = this.data.get(key);

    let res = fn(key, value);

    this.data.set(key, res);
    return res;
  }

  computeIfPresent(key: Key, fn: (_: Key, value: Value) => Value | undefined) {
    let value = this.data.get(key);
    if (value) {
      let res = fn(key, value);
      if (res) {
        this.data.set(key, res);
      } else {
        this.data.delete(key);
      }
      return res;
    }
  }

  
  
}
