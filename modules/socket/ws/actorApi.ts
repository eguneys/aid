import { UserWithSession } from '../../security/session';
import { SocketSri } from '../socket';


export class Who {
  static make = (u: UserWithSession,
                 sri: SocketSri) => new Who(u, sri);
  
  constructor(readonly u: UserWithSession,
              readonly sri: SocketSri) {
  }
}
