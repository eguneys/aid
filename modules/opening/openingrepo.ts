import { Coll } from '../db';
import Opening from './opening';
import { BSON } from '../db/bson';

export default class UserRepo {

  
  constructor(readonly coll: Coll<Opening>) {
  }

}
