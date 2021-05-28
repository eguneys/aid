import Ctrl from './ctrl';
import { AnaMove } from 'shared_options';

export type ReqPosition = {
  ch: string,
  path: string
}

export type StudySocketSendParams =
  | [t: 'setPath', d: ReqPosition]
  | [t: 'anaMove', d: AnaMove]

export type AnalyseSocketSendParams =
  | StudySocketSendParams

export type AnalyseSocketSend = (...[d,t]: AnalyseSocketSendParams) => void;

export interface Socket {
  send: AnalyseSocketSend;
  receive(type: string, data: any): boolean;
  sendAnaMove(d: AnaMove): void;
}

export function make(send: AnalyseSocketSend, ctrl: Ctrl) {

  const handlers = {
  };

  function sendAnaMove(req: AnaMove) {
    send('anaMove', req);
  }
  
  return {
    receive(type: string, data: any): boolean {
      const handler = (handlers as SocketHandlers)[type];

      if (handler) {
        handler(data);
        return true;
      }
      return false;
    },
    sendAnaMove,
    send
  };  
  
}
