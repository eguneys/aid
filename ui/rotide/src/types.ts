import { kbt } from 'koob';

export type Redraw = () => void;
export type Invalidate = () => void;

export const noop = () => {};

export interface RotideData {
  content?: kbt.Content
}

export type RotideOpts = {
  data: RotideData
};

