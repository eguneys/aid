import { OpeningDoc } from './bson'


export default class Opening {


  static make = (doc: OpeningDoc) =>
    new Opening(doc.id)

  constructor(readonly id: string) {
  }

}
