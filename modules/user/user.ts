import { BSONId } from '../db/bson';
import { UserDoc } from './bson';

export type UserId = string

export default class User {

  static make = (doc: UserDoc) =>
    new User(doc.id,
             doc.username,
      doc.litoken, 
    doc.games_since)
  
  constructor(readonly id: UserId,
    readonly username: string,
    readonly litoken: string,
    readonly games_since: number) {
  }
  
}
