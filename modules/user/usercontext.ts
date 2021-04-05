import express from 'express';
import { Nonce } from '../common';
import { kbu } from 'koob';

export class UserContext {
  req: express.Request

  me: Maybe<kbu.User>

  isAuth: boolean

  constructor(req: express.Request,
              me: Maybe<kbu.User>) {
    this.req = req;
    this.me = me;

    this.isAuth = !!me;
  }
}

export class UserContextWrapper {
  userContext: UserContext
  me: Maybe<kbu.User>
  req: any
  
  constructor(userContext: UserContext) {
    this.userContext = userContext;
    this.me = userContext.me;
    this.req = userContext.req;
  }
}
