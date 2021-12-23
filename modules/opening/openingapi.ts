import User from '../user/user'
import OpeningRepo from './openingrepo';

export default class OpeningApi {
  
  constructor(readonly repo: OpeningRepo) {
  }

  async create_from_pgn(user: User, pgn: string) {

    throw 'invalid pgn'
  }
 
}
