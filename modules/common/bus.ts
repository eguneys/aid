export class Bus {

  subs: Map<string, Sub[]> = new Map()

  subscribe(channel: string, handler: Sub) {
    let res = this.subs.get(channel) || [];

    res.push(handler);
    this.subs.set(channel, res);
  }
  
  publish(channel: string, msg: any) {
    let res = this.subs.get(channel);
    res?.forEach(_ => _(msg));
  }
  
}

export type Sub = (_: any) => void;

let bus = new Bus();

export default bus;
