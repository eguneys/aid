import RoundCtrl from './ctrl';


interface Handlers {
  [key: string]: (data: any) => void;
}

export default class RoundSocket {

  handlers: Handlers

  constructor(readonly send: SocketSend,
              ctrl: RoundCtrl) {

    this.send = send;

    this.handlers = {

      crowd(o) {
        ctrl.setCrowd(o);
        ctrl.redraw();
      }
      
    }
    
  }


    receive = (tpe: string, data: any): boolean => {
    if (this.handlers[tpe]) {
      this.handlers[tpe](data);
      return true;
    }
    return false;
  };
}
