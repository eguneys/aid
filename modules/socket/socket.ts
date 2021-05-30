export class SocketVersion {
  static make = (n: number) => new SocketVersion(n);

  constructor(readonly value: number) {
    
  }
}
