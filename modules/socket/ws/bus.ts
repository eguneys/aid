import { ClientMsg } from './clientin';

export function _room(roomId: string) {
  return `room/${roomId}`;
}

export function _sri(sri: string) {
  return `sri/${sri}`;
}

export const _all = `all`;

export class Bus {
  
  subs: Map<string, Sub[]> = new Map()

  unsubscribe(channel: string, handler: Sub) {
    let res = this.subs.get(channel);
    if (res) {
      this.subs.set(channel,
                    res.filter(_ => _ != handler))
    }
  }
  
  subscribe(channel: string, handler: Sub) {
    let res = this.subs.get(channel) || [];

    res.push(handler);
    this.subs.set(channel, res);
  }
  
  publish(channel: string, msg: ClientMsg) {
    let res = this.subs.get(channel);
    res?.forEach(_ => _(msg));
  }
  
}

export type Sub = (_: ClientMsg) => void;

let bus = new Bus();

export default bus;
