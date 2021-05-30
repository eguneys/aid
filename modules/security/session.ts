import User, { UserId } from '../user/user';
import { SessionDoc } from './bson';

export type SessionIdOrUserId = SessionId | UserId

export type SessionId = string;

export type UserWithSession = {
  user?: User,
  session: Session
}

export default class Session {

  static make = (doc: SessionDoc): Session => {
    return new Session(doc.id,
                       doc.createdAt,
                       doc.userId);
  }
  
  userId?: UserId
  createdAt: number
  id: SessionId

  constructor(id: SessionId,
              createdAt: number,
              userId?: UserId) {
    this.id = id;
    this.createdAt = createdAt;
    this.userId = userId;
  }

  withUser = (user?: User): UserWithSession => ({
    session: this,
    user
  });
  

  
}
