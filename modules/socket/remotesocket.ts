import WebSocketPubSub from './websocketpubsub';
import { OutHandler } from './ws/chestin';
import { ChestOut } from './ws/chestout';

export type Send = (_: ChestOut) => void

export default class RemoteSocket {

  constructor(readonly webClient: WebSocketPubSub) {
    
  }

  makeSender(channel: string) {
    return Sender.make(this, channel);
  }

  subscribe(channel: string, handler: OutHandler): Funit {
    return this.connectAndSubscribe(channel, handler);
  }

  connectAndSubscribe(channel: string, handler: OutHandler) {
    return this.webClient.subscribe(channel, handler);
  }
}

export class Sender {

  static make = (rs: RemoteSocket,
                 channel: string) => new Sender(rs, channel);

  constructor(readonly rs: RemoteSocket,
              readonly channel: string) {}

  apply = (msg: ChestOut) => {
    return this.rs.webClient.publish(this.channel, msg);
  }
  
}
