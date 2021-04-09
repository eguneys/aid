import { LiAuth } from '../lila/auth';
import UserRepo from './userrepo';

export default class UserApi {

  repo: UserRepo
  
  constructor(repo: UserRepo) {
    this.repo = repo;
  }

  async getOrCreate(liauth: LiAuth) {
    let user = await this.repo.byUsername(liauth.username)

    return user || this.repo.createUserFromLichess(liauth);
  }
  
}
