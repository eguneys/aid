import express from 'express';
import { Nonce } from '../common';
import User from './user';

export class UserContext {
  req: express.Request

  me: Maybe<User>

  isAuth: boolean
  sessionId?: string

  constructor(req: express.Request,
              me: Maybe<User>) {
    this.req = req;
    this.me = me;

    this.sessionId = this.req.session?.sessionId;
    this.isAuth = !!me;
  }
}

export class UserContextWrapper {
  userContext: UserContext
  me: Maybe<User>
  req: any
  sessionId?: string
  
  constructor(userContext: UserContext) {
    this.userContext = userContext;
    this.me = userContext.me;
    this.req = userContext.req;
    this.sessionId = userContext.sessionId;
  }
}
