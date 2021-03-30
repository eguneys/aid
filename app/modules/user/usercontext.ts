import express from 'express';
import { User } from './user';
import { Nonce } from '../common';

export class UserContext {
  req: express.Request

  me: Maybe<User>

  isAuth: boolean

  constructor(req: express.Request,
              me: Maybe<User>) {
    this.req = req;
    this.me = me;

    this.isAuth = !!me;
  }
}
