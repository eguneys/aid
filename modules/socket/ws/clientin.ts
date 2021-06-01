import { SocketVersion } from '../socket';

export interface ClientMsg {};

export interface ClientIn extends ClientMsg {
  write: string
}

export const Pong: ClientIn = {
  write: '0'
};

export class Payload implements ClientIn {

  static make = (msg: ClientMsg) => new Payload(msg);
  
  get write(): string { return JSON.stringify(this.msg); }
  
  constructor(readonly msg: ClientMsg) {}
}

export class HasVersion implements ClientMsg {
  constructor(readonly version: SocketVersion) { }
}

export class Versioned extends HasVersion {

  static make = (payload: ClientMsg,
                 version: SocketVersion) =>
    new Versioned(payload, version);

  kind = 'versioned';
  
  get full(): Payload {
    return Payload.make({
      v: this.version.value,
      ...this.payload
    });
  };

  get skip(): Payload {
    return Payload.make({
      v: this.version.value
    });
  };
  
  constructor(readonly payload: ClientMsg,
              version: SocketVersion) {
    super(version);
  }
  
}

export function isVersioned(_: ClientMsg): _ is Versioned {
  return (_ as Versioned).kind === 'versioned';
}
