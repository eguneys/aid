
export abstract class Coll<A> {

  name: string
  
  constructor(name: string) {
    this.name = name;
  }

  abstract one(query: any): Fu<Maybe<A>>
  abstract insert(doc: A): Fu<void>
  abstract update(filter: any, update: any): Fu<void>
  abstract find(query: any): Fu<Array<A>>
  
}
