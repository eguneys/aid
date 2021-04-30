import { UserId } from '../user/user';
import { SessionDoc } from './bson';

export type SessionId = string;

export default class Session {

  static make = (doc: SessionDoc): Session => {
    return new Session(doc.id,
                       doc.createdAt,
                       doc.userId);
  }
  
  userId?: UserId
  createdAt: Date
  id: SessionId

  constructor(id: SessionId,
              createdAt: Date,
              userId?: UserId) {
    this.id = id;
    this.createdAt = createdAt;
    this.userId = userId;
  }
  
}
