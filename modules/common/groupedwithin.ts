export class GroupedWithin<A> {

  static make = <A>(nb: number,
                 interval: number,
                 emit: Emit<Array<A>>) =>
    new GroupedWithin<A>(nb, interval, emit);
  
  buffer: Array<A> = []

  flush = () => this._flush()

  scheduledFlush = setTimeout(this.flush, this.interval)
  
  constructor(readonly nb: number,
              readonly interval: number,
              readonly emit: Emit<Array<A>>) {

  }

  apply(elem: A) {
    this.buffer.push(elem);
    if (this.buffer.length >= this.nb) this.flush();
  }

  _flush() {

    if (this.buffer.length > 0) {
      this.emit(this.buffer);
      this.buffer = [];
    }
    
    clearTimeout(this.scheduledFlush);
    this.scheduledFlush = setTimeout(this.flush, this.interval);
  }
  
}

export type Emit<A> = (_: A) => void

  
