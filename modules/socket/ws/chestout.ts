import { funit } from '../../common/base';
import Bus, { _sri } from './bus';
import * as cin from './clientin';
import { SocketSri, SocketVersion } from '../socket';
import { Pairing  } from '../../pool/poolapi';
import { Color } from '../../game/color';

export function chestOut2ClientIn(chestOut: ChestOutHandler) {
  chestOut.subscribe('matchmaker-out', matchmakerHandler);
}

export function matchmakerHandler(msg: ChestOut) {
  if (LobbyPoolSize.isLobbyPoolSize(msg)) {
    Bus.publish(`matchmaker`, cin.Payload.cliMsg(
      'poolSize',
      msg.size
    ));
  }
  if (LobbyPairings.isLobbyPairings(msg)) {
    msg.pairings.forEach(pairing =>
      Color.all.forEach(color =>
        pairing.sries(color).forEach((sri: SocketSri) =>
          Bus.publish(_sri(sri), cin.Payload.cliMsg(
            'redirect',
            {
              id: pairing.game.fullIdOf(color),
              url: `/${pairing.game.fullIdOf(color)}`
            }
          )))))

  }
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

export class LobbyPoolSize implements ChestOut {

  static make = (size: number) => new LobbyPoolSize(size);

  static isLobbyPoolSize = (_: ChestOut): _ is LobbyPoolSize => {
    return _.chOut === 'lobby/poolSize';
  }
  
  chOut = 'lobby/poolSize';
  
  constructor(readonly size: number) {
    
  }
}

export class LobbyPairings implements ChestOut {

  static make = (pairings: Array<Pairing>) => new LobbyPairings(pairings);

  static isLobbyPairings = (_: ChestOut): _ is LobbyPairings => {
    return _.chOut === 'lobby/pairings';
  }
  
  chOut = 'lobby/pairings';
  
  constructor(readonly pairings: Array<Pairing>) {
    
  }
}


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
