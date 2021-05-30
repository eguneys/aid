import Store from './store';
import { UserRepo } from '../user';
import User, { UserId } from '../user/user';
import Session, { UserWithSession, SessionId } from './session';
import { nextString, fuUndefined } from '../common';

export class SecurityApi {

  userRepo: UserRepo
  store: Store
  
  constructor(userRepo: UserRepo,
              store: Store) {
    this.userRepo = userRepo;
    this.store = store;
  }

  saveSession(user: User): Fu<SessionId> {
    let sessionId: SessionId = nextString(8);
    return this.store.save(sessionId, user.id)
      .then(_ => sessionId);
  }

  anonymousSessionId(): Fu<SessionId> {
    let sessionId: SessionId = nextString(8);
    return this.store.saveAnon(sessionId).then(_ => sessionId);
  }

  restoreUser(req: any): Fu<Maybe<User>> {
    let { sessionId } = req.session;

    if (!sessionId) {
      return fuUndefined;
    }
    
    return this.store.authInfo(sessionId).then(userId =>
      userId ? this.userRepo.byId(userId)
      : fuUndefined);
  }

  restoreUserSession(sessionId: SessionId): Fu<Maybe<UserWithSession>> {
    if (!sessionId) {
      return fuUndefined;
    }
    
    return this.store.sessionInfo(sessionId).then(session =>
      session?.userId ?
      this.userRepo.byId(session.userId)
        .then(user => session.withUser(user))
      : fuUndefined);    
  }
  
}
