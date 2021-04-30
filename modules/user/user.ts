import { BSONId } from '../db/bson';
import { UserDoc } from './bson';

export type UserId = string

export default class User {

  static make = (doc: UserDoc) =>
    new User(doc.id,
             doc.username)
  
  id: UserId
  username: string
  
  constructor(id: UserId,
              username: string) {
    this.id = id;
    this.username = username;
  }
  
}
