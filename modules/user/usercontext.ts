import express from 'express';
import { Nonce } from '../common';
import User from './user';
import { SessionOrUserId } from '../security/session';

export class UserContext {
  req: express.Request

  me: Maybe<User>

  isAuth: boolean
  sessionOrUserId?: SessionOrUserId

  constructor(req: express.Request,
              me: Maybe<User>) {
    this.req = req;
    this.me = me;

    this.sessionOrUserId =
      this.me?.id||this.req.session?.sessionId;
    this.isAuth = !!me;
  }
}

export class UserContextWrapper {
  userContext: UserContext
  me: Maybe<User>
  req: any
  sessionOrUserId?: SessionOrUserId
  
  constructor(userContext: UserContext) {
    this.userContext = userContext;
    this.me = userContext.me;
    this.req = userContext.req;
    this.sessionOrUserId = userContext.sessionOrUserId;
  }
}
