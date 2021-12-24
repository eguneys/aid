import { Coll } from '../db';
import Opening from './opening';
import { BSON } from '../db/bson';
import User from '../user/user'

export default class UserRepo {

  
  constructor(readonly coll: Coll<Opening>) {
  }

  insert(opening: Opening) {
    return this.coll.insert(opening)
  }
  
  byUser(user: User) {
    return this.coll.find({
      userId: user.id
    }) 
  }

}
