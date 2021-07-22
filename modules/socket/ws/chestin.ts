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

  matchmaker(msg: ChestIn) {
    this.emitSubs('matchmaker-in', msg);
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

export interface TellSri extends ChestIn {
  tpe: 'tell/sri',
  who: Maybe<Who>,
  payload: any
}

export function tellSri(who: Maybe<Who>,
                        payload: any) {
  return {
    tpe: 'tell/sri',
    who,
    payload
  }
}

export function isTellSri(_: ChestIn): _ is TellSri {
  return _.tpe === 'tell/sri';
}
