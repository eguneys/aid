import { LiAuth } from '../lila/auth';
import UserRepo from './userrepo';

export default class UserApi {

  repo: UserRepo
  
  constructor(repo: UserRepo) {
    this.repo = repo;
  }

  save(liauth: LiAuth) {
    return this.repo.createUserFromLichess(liauth);
  }
  
}
