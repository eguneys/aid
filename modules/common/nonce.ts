import { nextString } from './random';

export interface Nonce {
  value: string
}

export class Nonce {

  static random = (): Nonce => new Nonce(nextString(24));
  
  value: string

  constructor(value: string) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}
