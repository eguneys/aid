import { funit } from '../../common/base';
import Bus, { _sri } from './bus';
import * as cin from './clientin';
import { SocketSri, SocketVersion } from '../socket';

export function chestOut2ClientIn(chestOut: ChestOutHandler) {
}


export class ChestOutHandler {
  static make = () => new ChestOutHandler();

  outSubs: Map<string, OutHandler[]> = new Map();

  subscribe(channel: string, handler: OutHandler) {
    let res = this.outSubs.get(channel) || [];

    res.push(handler);
    this.outSubs.set(channel, res);
    
    return funit;
  }
  
  publish(channel: string, msg: ChestOut) {
    let res = this.outSubs.get(channel);
    res?.forEach(_ => _(msg));
  }
}

export type OutHandler = (_: ChestOut) => void;


export interface ChestOut {
  chOut: string
};


export interface TellRoomVersion extends ChestOut {
  chOut: 'tell/room/version';
  roomId: string;
  payload: cin.ClientMsg;
  version: SocketVersion;
}

export function tellRoomVersion(roomId: string,
                                payload: cin.ClientMsg,
                                version: SocketVersion): TellRoomVersion {
  return {
    chOut: 'tell/room/version',
    roomId,
    payload,
    version
  };
}

export function isTellRoomVersion(_: ChestOut): _ is TellRoomVersion {
  return _.chOut === 'tell/room/version';
}
