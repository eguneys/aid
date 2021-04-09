import Store from './store';
import { UserRepo } from '../user';
import { kbu, kba } from 'koob';
import { nextString } from '../common';

export default class SecurityApi {

  userRepo: UserRepo
  store: Store
  
  constructor(userRepo: UserRepo,
              store: Store) {
    this.userRepo = userRepo;
    this.store = store;
  }

  saveSession(user: kbu.User): Fu<kba.SessionId> {
    let sessionId: kba.SessionId = nextString(8);
    return this.store.save(sessionId, user.id)
      .then(_ => sessionId);
  }

  anonymousSessionId(): Fu<kba.SessionId> {
    let sessionId: kba.SessionId = nextString(8);
    return this.store.saveAnon(sessionId).then(_ => sessionId);
  }

  restoreUser(req: any): Fu<Maybe<kbu.User>> {
    let { sessionId } = req.session;

    if (!sessionId) {
      return Promise.resolve(undefined);
    }
    
    return this.store.authInfo(sessionId).then(userId =>
      userId ? this.userRepo.byId(userId)
      : Promise.resolve(undefined));
  }
  
}
