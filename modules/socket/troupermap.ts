import {  PamCache } from 'pampu';

export default class TrouperMap<T> {

  troupers: PamCache<string, T>
  
  constructor(
    readonly mkTrouper: (_: string) => T) {

    this.troupers = new PamCache<string, T>({
      size: 100,
      loader: mkTrouper
    });
    
  }

  getOrMake(id: string): T {
    return this.troupers.get(id);
  }

  ask<A>(id: string) {
    return (fn: (_: T) => A): Fu<A> => {
      return Promise.resolve(fn(this.getOrMake(id)));
    }
  }
  
}
