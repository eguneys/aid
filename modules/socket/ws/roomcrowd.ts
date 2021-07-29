import { RoomId } from './actorApi';
import User, { UserId } from '../../user/user';


export class RoomState {

  constructor(readonly users: Map<UserId, number> = new Map()) {
  }

  get nbMembers() { return this.users.size }
  get isEmpty() { return this.nbMembers < 1 }

  connect(user: Maybe<User>) {
    if (user) {
      this.users.set(user.id,
                     (this.users.get(user.id) || 0)
        + 1);
    }
  }

  disconnect(user: Maybe<User>) {
    if (user) {
      let n = this.users.get(user.id)
      if (!n || n === 1) {
        this.users.delete(user.id)
      } else {
        this.users.set(user.id, n - 1);
      }
    }
  }
}


export class Output {

  static outputOf = (roomId: RoomId, room: RoomState) =>
    new Output(roomId,
               [...room.users.keys()])
  
  constructor(readonly roomId: RoomId,
              readonly users: Array<UserId>) {
    
  }
              
  
}


