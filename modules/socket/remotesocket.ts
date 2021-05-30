import WebSocketPubSub from './websocketpubsub';

export type Send = (_: string) => void
export type Handler = (_: string) => void

export default class RemoteSocket {

  constructor(readonly webClient: WebSocketPubSub) {
    
  }

  makeSender(channel: string) {
    return Sender.make(this, channel);
  }

  subscribe(channel: string, handler: Handler): Funit {
    return this.connectAndSubscribe(channel, handler);
  }

  connectAndSubscribe(channel: string, handler: Handler) {
    return this.webClient.subscribe(channel, message => handler(message))
  }
}

export class Sender {

  static make = (rs: RemoteSocket,
                 channel: string) => new Sender(rs, channel);

  constructor(readonly rs: RemoteSocket,
              readonly channel: string) {}

  apply = (msg: string) => {
    return this.rs.webClient.publish(this.channel, msg);
  }
  
}
