import { VNode } from 'snabbdom';
import { AnalyseOptions } from 'shared_options';
import { AnalyseSocketSend } from './socket';

export type MaybeVNode = VNode | string | null | undefined;
export type MaybeVNodes = MaybeVNode[];

export interface AnalyseOptionsPlus extends AnalyseOptions {
  socketSend: AnalyseSocketSend
}
