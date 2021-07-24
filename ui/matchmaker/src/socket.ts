import MatchCtrl from './ctrl';
import { PoolMember } from 'shared_options';

interface Handlers {
  [key: string]: (data: any) => void;
}

export default class MatchSocket {

  handlers: Handlers

  constructor(readonly send: SocketSend,
              ctrl: MatchCtrl) {
    this.send = send;

    this.handlers = {
      poolSize: size => {
        ctrl.poolSpread(size)
        ctrl.redraw()
      }
    };
  }

  poolIn(member: PoolMember) {
    this.send('poolIn', member, {}, true);
  }

  poolOut(member: PoolMember) {
    this.send('poolOut', member.id);
  }

  receive = (tpe: string, data: any): boolean => {
    if (this.handlers[tpe]) {
      this.handlers[tpe](data);
      return true;
    }
    return false;
  };
  
}
