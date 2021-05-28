import { AnalyseOptions } from 'shared_options';
import { AnalyseSocketSend } from './socket';

export interface AnalyseOptionsPlus extends AnalyseOptions {
  socketSend: AnalyseSocketSend
}
