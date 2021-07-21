import { SteamProfile } from '../steam/auth';
import UserRepo from './userrepo';

export default class UserApi {

  repo: UserRepo
  
  constructor(repo: UserRepo) {
    this.repo = repo;
  }

  async getOrCreate(profile: SteamProfile) {
    let user = await this.repo.byUsername(profile.personaname)

    return user || this.repo.createUserFromSteam(profile);
  }
  
}
