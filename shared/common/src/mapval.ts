import { Value, AnyVal } from './anyval';

export default class MapVal<K extends AnyVal, V> {

  data: Map<Value, V>

  constructor(data: Array<[K, V]> = []) {
    this.data = new Map<Value, V>(
      data.map(_ => [_[0].key, _[1]])
    );
  }

  delete(k: K) {
    this.data.delete(k.key);
  }
  
  get(k: K): V | undefined {
    return this.data.get(k.key);
  }

  set(k: K, v: V) {
    this.data.set(k.key, v);
  }
  
}
