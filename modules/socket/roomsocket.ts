import Trouper from './trouper';
import TrouperMap from './troupermap';
import { Send } from './remotesocket';
import { SocketVersion } from './socket';

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
  
}

export function makeRoomMap(send: Send) {
  return new TrouperMap(roomId =>
    RoomState.make(roomId, send));
}
