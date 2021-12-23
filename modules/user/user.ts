import { BSONId } from '../db/bson';
import { UserDoc } from './bson';

export type UserId = string

export default class User {

  static make = (doc: UserDoc) =>
    new User(doc.id,
             doc.username,
      doc.litoken)
  
  constructor(readonly id: UserId,
    readonly username: string,
    readonly litoken: string) {
  }
  
}
