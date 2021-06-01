import WsClient from './client';
import { RoomId } from './actorApi';
import { ClientEmit } from './types';
import { UserWithSession } from '../../security/session';
import * as cout from './clientout';
import * as cin from './clientin';
import * as chIn from './chestin';
import * as chOut from './chestout';
import { SocketVersion } from '../socket';
import Bus from './bus';

export default abstract class RoomClient extends WsClient {

  constructor(
    readonly id: RoomId,
    readonly fromVersion: Maybe<SocketVersion>,
    chestIn: chIn.ChestInHandler,
    clientIn: ClientEmit,
    sri: string,
    user: Maybe<UserWithSession>) {

    super(chestIn,
          clientIn,
          sri,
          user);


    // TODO users connect
    Bus.subscribe(`room/${id}`, this.in);
    // TODO history all clientIn
  }

  versionFor(msg: cin.Versioned): cin.Payload {
    return msg.full;
  }
  

  in = (_: cin.ClientMsg) => {
    if (cin.isVersioned(_)) {
      this.clientIn(this.versionFor(_))
    }
  }
}
