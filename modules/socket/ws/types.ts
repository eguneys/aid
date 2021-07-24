import { ClientIn, ClientMsg } from './clientin';

export type ClientEmit = (_: ClientIn) => void;

export interface ClientKindMsg extends ClientMsg {
  kind: string
};

export class Broom implements ClientKindMsg {

  kind: string = 'broom';

  static isBroom = (_: ClientMsg): _ is Broom => {
    return (_ as ClientKindMsg).kind == 'broom';
  }
  
  static make = (oldSeconds: number) => new Broom(oldSeconds);
  
  constructor(
    readonly oldSeconds: number) {
  }
  
}
