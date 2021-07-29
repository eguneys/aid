import { SocketVersion } from '../socket';

export interface ClientMsg {};

export abstract class ClientIn implements ClientMsg {

  static isClientIn = (_: ClientMsg): _ is ClientIn => {
    return (_ as ClientIn).clientIn;
  }
  
  clientIn = true;
  abstract write: string;
}

export class PongIn extends ClientIn {

  static Pong = new PongIn();

  write = '0';
  
}

export class Crowd extends ClientIn {

  static make = (doc: any) => new Crowd(doc);

  static empty = Crowd.make([]);

  static isCrowd = (_: ClientMsg): _ is Crowd => {
    return (_ as Crowd).kind === 'crowd';
  }

  kind = 'crowd';
  
  constructor(readonly doc: any) {
    super();
  }
  
  get write() {
    return JSON.stringify(cliMsg('crowd',
                                 this.doc));
  }

  equals(crowd: Crowd) {
    return crowd.write === this.write;
  }
}

export class Payload extends ClientIn {

  static cliMsg = (t: string, d: ClientMsg) => new Payload({
    d, t })
  
  static make = (msg: ClientMsg) => new Payload(msg);

  kind: string = 'payload';
  
  get write(): string { return JSON.stringify(this.msg); }
  
  constructor(readonly msg: ClientMsg) {
    super();
  }
}

export function isPayload(_: ClientMsg): _ is Payload {
  return (_ as Payload).kind === 'payload';
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

export function cliMsg(t: string, d: any) {
  return {t, d };
}
