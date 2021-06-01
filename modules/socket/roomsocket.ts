import Trouper from './trouper';
import TrouperMap from './troupermap';
import { Send } from './remotesocket';
import { SocketVersion, makeMessage } from './socket';
import * as chOut from './ws/chestout';

export class RoomState extends Trouper {

  static make = (roomId: string,
                 send: Send) => new RoomState(roomId, send);


  private _version: SocketVersion = SocketVersion.make(0);

  get version(): SocketVersion {
    return this._version;
  }
  
  constructor(readonly roomId: string,
              readonly send: Send) {
    super();
  }

  tell(msg: any) {
    if (isNotifyVersion(msg)) {
      this._version = this._version.inc;

      this.send(
        chOut
          .tellRoomVersion(this.roomId,
                           msg.msg,
                           this.version))
    }
  }
  
}

export function makeRoomMap(send: Send) {
  return new TrouperMap(roomId =>
    RoomState.make(roomId, send));
}

export class NotifyVersion {
  static make = (tpe: string, data: object) =>
    new NotifyVersion(tpe, data);

  kind: string = 'notifyVersion';
  
  get msg() { return makeMessage(this.tpe, this.data) };
  
  constructor(readonly tpe: string,
              readonly data: object) {}

}

export function isNotifyVersion(_: any): _ is NotifyVersion {
  return (typeof _ === 'object') && (_ as NotifyVersion).kind === 'notifyVersion';
}
