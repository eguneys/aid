import { Who, RoomId } from './actorApi';
import { ClientOut } from './clientout';
import { funit } from '../../common/base';
import { ChestOut } from './chestout';

export class ChestInHandler {
  static make = () => new ChestInHandler();

  inSubs: Map<string, OutHandler[]> = new Map();

  subscribe(channel: string, handler: OutHandler) {
    let res = this.inSubs.get(channel) || [];

    res.push(handler);
    this.inSubs.set(channel, res);
    
    return funit;
  }

  private emitSubs(channel: string, msg: ChestIn) {
    let res = this.inSubs.get(channel);
    res?.forEach(_ => _(msg));
  }

  study(msg: ChestIn) {
    this.emitSubs('study-in', msg);
  }

  
}

export type OutHandler = (_: ChestIn) => void;

export interface ChestIn {
  tpe: string
}

export interface TellRoomWho extends ChestIn {
  tpe: 'tellRoomWho',
  id: RoomId,
  who: Maybe<Who>,
  msg: ClientOut
}

export function isTellRoomWho(_: ChestIn): _ is TellRoomWho {
  return _.tpe === 'tellRoomWho';
}

export function tellRoomWho(id: RoomId,
                            who: Maybe<Who>,
                            msg: ClientOut) {
  return {
    tpe: 'tellRoomWho',
    id,
    who,
    msg
  };
}
