import WsClient from './client';
import { StudyId } from '../../study/study';
import { ClientEmit } from './types';
import { UserWithSession } from '../../security/session';
import * as cout from './clientout';
import * as cin from './clientin';
import * as chIn from './chestin';
import * as chOut from './chestout';
import RoomClient from './roomclient';
import { SocketVersion } from '../socket';

export default class StudyClient extends RoomClient {

  static make = (id: StudyId,
                 fromVersion: Maybe<SocketVersion>,
                 chestIn: chIn.ChestInHandler,
                 clientIn: ClientEmit,
                 req: any,
                 sri: string,
                 user: Maybe<UserWithSession>) =>
    new StudyClient(id,
                    fromVersion,
                    chestIn,
                    clientIn,
                    sri,
                   user);

  constructor(
    id: StudyId,
    fromVersion: Maybe<SocketVersion>,
    chestIn: chIn.ChestInHandler,
    clientIn: ClientEmit,
    sri: string,
    user: Maybe<UserWithSession>) {

    super(id,
          fromVersion,
          chestIn,
          clientIn,
          sri,
          user);
  }

  forward(msg: cout.ClientOut) {
    this.chestIn.study(chIn.tellRoomWho(this.id, this.who, msg));
  }

  out(msg: cout.ClientOut) {
    
    if (cout.isAddChapter(msg)) {
      this.forward(msg);
    } else {
      super.out(msg);
    }
  };
}
