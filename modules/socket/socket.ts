export class SocketVersion {
  static make = (n: number) => new SocketVersion(n);

  get inc():SocketVersion { return SocketVersion.make(this.value + 1); }
  
  constructor(readonly value: number) {
    
  }
}

export type SocketSri = string;

export function makeMessage(t: string, d: object) {
  return {
    t,
    d
  }
}
