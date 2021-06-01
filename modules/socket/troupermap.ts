import {  PamCache } from 'pampu';
import Trouper from './trouper';

export default class TrouperMap<T extends Trouper> {

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

  tell(id: string, msg: any) {
    this.getOrMake(id).tell(msg);
  }
  
}
