import { nextString } from './random';

export interface Nonce {
  value: string
}

export function random(): Nonce {
  return {
    value: nextString(24)
  }
}
