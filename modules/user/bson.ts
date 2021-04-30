import { BSONId, DocId } from '../db/bson';
import User from './user';
import LiUser from './liuser';

export type UserDoc = DocId & {
  username: string
}

export const UserBsonHandler: BSONId<User> = {
  read(doc: UserDoc): User {
    return User.make(doc);
  },

  write(user: User): UserDoc {
    return {
      id: user.id,
      username: user.username
    };
  }
};

export type LiUserDoc = DocId & {

}

export const LiUserBsonHandler: BSONId<LiUser> = {
  read(doc: LiUserDoc): LiUser {
    return LiUser.make(doc);
  },

  write(liuser: LiUser): LiUserDoc {
    return {
      id: liuser.id
    };
  }
}
