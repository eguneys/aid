import { RoundData } from 'shared_options';
import { RoundOptions } from './interfaces';
import RoundSocket from './socket';

export type Username = string

export default class RoundCtrl {

  static make = (opts: RoundOptions,
                 redraw: Redraw) => new RoundCtrl(opts, redraw)

  firstSeconds = true;
  socket: RoundSocket

  data: RoundData

  crowd: Map<Username, boolean> = new Map()

  constructor(readonly opts: RoundOptions,
              readonly redraw: Redraw) {

    this.socket = new RoundSocket(opts.socketSend,
                                  this);


    let { data }  = opts;

    this.data = data;

    setTimeout(() => {
      this.firstSeconds = false;
      this.redraw();
    }, 3000);
  }

  setCrowd = (crowd: Array<Username>) => {
    this.crowd = new Map();
    crowd.forEach(name => this.crowd.set(name, true));
  };

  onGame = (name: Username) => {
    return this.crowd.get(name) === true;
  }
  
  ready = () => {
    console.log('ready');
  };
  
}
