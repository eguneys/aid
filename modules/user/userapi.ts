import { LiAuth } from '../lila/auth';
import UserRepo from './userrepo';

export default class UserApi {

  repo: UserRepo
  
  constructor(repo: UserRepo) {
    this.repo = repo;
  }

  async getOrCreate(profile: LiAuth) {
    let user = await this.repo.byUsername(profile.username)
    return user || this.repo.createUserFromLiAuth(profile)
  }
// 
//   async getOrCreate(profile: SteamProfile) {
//     let user = await this.repo.byUsername(profile.personaname)
// 
//     return user || this.repo.createUserFromSteam(profile);
//   }
//   
}
