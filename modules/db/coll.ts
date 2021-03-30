
export abstract class Coll {

  name: string
  
  constructor(name: string) {
    this.name = name;
  }

  abstract insert(doc: any): Fu<void>
  abstract find(query: any): Fu<any>
  
}
