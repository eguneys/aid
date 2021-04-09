export type WithId = {
  id: string
}


export abstract class Coll<A extends WithId> {

  constructor() {
  }

  abstract one(query: any): Fu<Maybe<A>>
  abstract insert(doc: A): Fu<void>
  abstract update(id: string, update: any): Fu<void>
  abstract find(query: any): Fu<Array<A>>
  
}
