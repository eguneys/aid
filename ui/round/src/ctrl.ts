import { RoundData } from 'shared_options';
import { RoundOptions } from './interfaces';
import RoundSocket from './socket';


export default class RoundCtrl {

  static make = (opts: RoundOptions,
                 redraw: Redraw) => new RoundCtrl(opts, redraw)

  socket: RoundSocket

  data: RoundData

  constructor(readonly opts: RoundOptions,
              readonly redraw: Redraw) {

    this.socket = new RoundSocket(opts.socketSend,
                                  this);


    let { data }  = opts;

    this.data = data;
  }

  ready = () => {
    console.log('ready');
  };
  
}
