import { LiAuth } from '../lila/auth';
import UserRepo from './userrepo';
import User from './user'

export default class UserApi {

  repo: UserRepo
  
  constructor(repo: UserRepo) {
    this.repo = repo;
  }

  async getOrCreate(profile: LiAuth) {
    let user = await this.repo.byUsername(profile.username)
    return user || this.repo.createUserFromLiAuth(profile)
  }


  async update_since_ifrecent(user: User, _since: number) {

    let since = Math.max(user.games_since, _since)

    return this.repo.updateGamesSince(user.id, since)
  }
}

