import * as xhr from 'common/xhr';
import idleTimer from './idle-timer';
import sri from './sri';
import { reload } from './reload';

type Sri = string;
type Tpe = string;
type Version = number;
type Payload = any;

interface MsgBase {
  t: Tpe;
  d?: Payload;
}

interface MsgIn extends MsgBase {
  v?: Version;
}

interface MsgOut extends MsgBase {}
interface MsgAck extends MsgOut {
  at: number;
}
type Send = (t: Tpe, d: Payload, o?: any) => void;

interface Options {
  idle: boolean;
  pingMaxLag: number;
  pingDelay: number;
  autoReconnectDelay: number;
  protocol: string;
  isAuth: boolean;
  debug?: boolean;
}

interface Params {
  sri: Sri;
}

interface Settings {
  receive?: (t: Tpe, d: Payload) => void;
  events: {
    [tpe: string]: (d: Payload | null, msg: MsgIn) => any;
  };
  params?: Params;
  options?: Partial<Options>;
}

export default class StrongSocket {

  settings: Settings;
  options: Options;
  version: number | false;
  ws: WebSocket | undefined;
  pingSchedule!: Timeout;
  connectSchedule!: Timeout;
  ackable: Ackable = new Ackable((t, d, o) => this.send(t, d, o));
  lastPingTime: number = performance.now();
  pongCount = 0;
  averageLag = 0;
  autoReconnect = true;
  nbConnects = 0;

  static defaultOptions: Options = {
    idle: false,
    pingMaxLag: 9000,
    pingDelay: 2500,
    autoReconnectDelay: 3500,
    protocol: location.protocol === 'https:' ? 'wss:' : 'ws:',
    isAuth: document.body.hasAttribute('user')
  };

  static defaultParams: Params = {
    sri: sri
  };

  static resolveFirstConnect: (send: Send) => void;
  static firstConnect = new Promise<Send>(r => {
    StrongSocket.resolveFirstConnect = r;
  });

  constructor(readonly url: string,
              version: number | false,
              settings: Partial<Settings> = {}) {

    this.settings = {
      receive: settings.receive,
      events: settings.events || {},
      params: {
        ...StrongSocket.defaultParams,
        ...(settings.params || {})
      },
    };

    this.options = {
      ...StrongSocket.defaultOptions,
      ...(settings.options || {}),
    };

    this.version = version;
    this.connect();
  }

  connect = () => {
    this.destroy();
    this.autoReconnect = true;
    const fullUrl = xhr.url(this.options.protocol + '//' + this.baseUrl() + this.url, {
      ...this.settings.params,
      v: this.version === false ? undefined : this.version,
    });
    this.debug('connection attempt to ' + fullUrl);
    try {
      const ws = (this.ws = new WebSocket(fullUrl));
      ws.onerror = e => this.onError(e);
      ws.onclose = () => {
        if (this.autoReconnect) {
          this.debug('Will autoreconnect in ' + this.options.autoReconnectDelay);
          this.scheduleConnect(this.options.autoReconnectDelay);
        }
      };
      ws.onopen = () => {
        this.debug('connected to ' + fullUrl);
        this.onSuccess();
        const cl = document.body.classList;
        cl.remove('offline');
        cl.add('online');
        cl.toggle('reconnected', this.nbConnects > 1);
        this.pingNow();
        this.ackable.resend();
      };
      ws.onmessage = e => {
        if (e.data == 0) return this.pong();
        const m = JSON.parse(e.data);
        if (m.t === 'n') this.pong();
        this.handle(m);
      };
    } catch (e) {
      this.onError(e);
    }
    this.scheduleConnect(this.options.pingMaxLag);
  };

  send = (t: string, d: any, o: any = {}, noRetry = false) => {
    const msg: Partial<MsgOut> = { t };
    if (d !== undefined) {
      if (o.withLag) d.l = Math.round(this.averageLag);
      msg.d = d;
    }

    if (o.ackable) {
      msg.d = msg.d || {};
      this.ackable.register(t, msg.d);
    }

    const message = JSON.stringify(msg);
    this.debug('send ' + message);

    try {
      this.ws!.send(message);
    } catch (e) {
      if (!noRetry) setTimeout(() => this.send(t, msg.d, o, true), 1000);
    }
    
  };

  scheduleConnect = (delay: number) => {
    if (this.options.idle) delay = 10 * 1000 + Math.random() * 10 * 1000;
    clearTimeout(this.pingSchedule);
    clearTimeout(this.connectSchedule);
    this.connectSchedule = setTimeout(() => {
      document.body.classList.add('offline');
      document.body.classList.remove('online');
      this.connect();
    }, delay);
  };

  schedulePing = (delay: number) => {
    clearTimeout(this.pingSchedule);
    this.pingSchedule = setTimeout(this.pingNow, delay);
  };

  pingNow = () => {
    clearTimeout(this.pingSchedule);
    clearTimeout(this.connectSchedule);
    const pingData =
      this.options.isAuth && this.pongCount % 8 === 2
      ? JSON.stringify({
        t: 'p',
        l: Math.round(0.1 * this.averageLag)
      }) : 'null';

    try {
      this.ws!.send(pingData);
      this.lastPingTime = performance.now();
    } catch (e) {
      this.debug(e, true);
    }
    this.scheduleConnect(this.options.pingMaxLag);
  };

  computePingDelay = () => this.options.pingDelay + (this.options.idle ? 1000 : 0);

  pong = () => {
    clearTimeout(this.connectSchedule);
    this.schedulePing(this.computePingDelay());
    const currentLag = Math.min(performance.now() - this.lastPingTime, 10000);
    this.pongCount++;

    const mix = this.pongCount > 4 ? 0.1 : 1 / this.pongCount;
    this.averageLag += mix * (currentLag - this.averageLag);
  };

  handle = (m: MsgIn) => {
    if (m.v && this.version !== false) {
      if (m.v <= this.version) {
        this.debug('already has event ' + m.v);
        return;
      }
      if (m.v > this.version + 1) return reload();
      this.version = m.v;
    }

    switch (m.t || false) {
      case false:
        break;
      case 'resync':
        reload();
        break;
      case 'ack':
        this.ackable.onServerAck(m.d);
        break;
      default:
        if (!(this.settings.receive && this.settings.receive(m.t, m.d))) {
          if (this.settings.events[m.t]) this.settings.events[m.t](m.d || null, m);
        }
    }
    
  };

  debug = (msg: string, always = false) => {
    if (always || this.options.debug) console.debug(msg);
  };

  destroy = () => {
    clearTimeout(this.pingSchedule);
    clearTimeout(this.connectSchedule);
    this.disconnect();
    this.ws = undefined;
  };

  disconnect = () => {
    const ws = this.ws;
    if (ws) {
      this.debug('disconnect');
      this.autoReconnect = false;
      ws.onerror = ws.onclose = ws.onopen = ws.onmessage = () => {};
      ws.close();
    }
  };

  onError = (e: Event) => {
    this.options.debug = true;
    this.debug('error: ' + JSON.stringify(e));
    clearTimeout(this.pingSchedule);
  };

  onSuccess = () => {
    this.nbConnects++;
    if (this.nbConnects == 1) {
      StrongSocket.resolveFirstConnect(this.send);
      let disconnectTimeout: Timeout | undefined;
      idleTimer(
        10 * 60 * 1000,
        () => {
          this.options.idle = true;
          disconnectTimeout = setTimeout(this.destroy, 2 * 60 * 60 * 1000);
        },
        () => {
          this.options.idle = false;
          if (this.ws) clearTimeout(disconnectTimeout);
          else location.reload();
        });
    }
  };

  baseUrl = () => {
    const baseUrls = document.body.getAttribute('data-socket-domains')!.split(',');
    let url = baseUrls[0];
    return url;
  };

  pingInterval = () => this.computePingDelay() + this.averageLag;
  getVersion = () => this.version;
}


class Ackable {

  currentId = 1;
  messages: MsgAck[] = [];

  constructor(readonly send: Send) {
    setInterval(this.resend, 1200);
  }

  resend = () => {
    const resendCutoff = performance.now() - 2500;
    this.messages.forEach(m => {
      if (m.at < resendCutoff) this.send(m.t, m.d);
    });
  };

  register = (t: Tpe, d: Payload) => {
    d.a = this.currentId++;
    this.messages.push({
      t: t,
      d: d,
      at: performance.now()
    });
  };

  onServerAck = (id: number) => {
    this.messages = this.messages.filter(m => m.d.a !== id);
  };
  
}
