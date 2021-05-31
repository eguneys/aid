import { funit } from '../../common/base';

export class ChestOut {
  static make = () => new ChestOut();

  subscribe(channel: string, handler: OutHandler) {
    return funit;
  }
}

export type OutHandler = (_: string) => void;
