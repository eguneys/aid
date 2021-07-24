import { UserWithSession } from '../../security/session';
import { UserId } from '../../user/user';
import { SocketSri } from '../socket';


export class Who {
  static make = (u: UserWithSession,
                 sri: SocketSri) => new Who(u, sri);

  get userId(): Maybe<UserId> {
    return this.u.user?.id;
  }
  
  constructor(readonly u: UserWithSession,
              readonly sri: SocketSri) {
  }
}

export type RoomId = string;
