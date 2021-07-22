export interface ClientOut {
  t: string
  d?: any
}

export interface Ping extends ClientOut {
  t: 'p',
  d: number
};

export interface Unexpected extends ClientOut {
  t: 'u',
  d: string
};

export function ping(lag?: number) {
  return {
    t: 'p',
    d: lag
  };
}

export const emptyPing = {
  t: 'p'
};

export const unexpected = (msg: string) => ({
  t: 'u',
  d: msg
});

export function isPing(_: any): _ is Ping {
  if (typeof _ === 'object') {
    if ((_ as Ping).t === 'p') {
      return true;
    }
  }
  return false;
}


export function isUnexpected(_: any): _ is Unexpected {
  if (typeof _ === 'object') {
    if ((_ as Unexpected).t === 'u') {
      return true;
    }
  }
  return false;
}


export interface MatchmakerForward extends ClientOut {
  t: 'mforward',
  payload: any
}

export function matchmakerForward(payload: any) {
  return {
    t: 'mforward',
    payload
  };
}

export function isMForward(_: any): _ is MatchmakerForward {
  if (typeof _ === 'object') {
    if ((_ as MatchmakerForward).t === 'mforward') {
      return true;
    }
  }
  return false;
}

export function parse(msg: string): Maybe<ClientOut> {

  if (msg === 'null' || msg === `{"t":"p"}`) {
    return emptyPing;
  } else {
    try {
      let o = JSON.parse(msg);

      switch (o.t) {
        case 'p': return ping(o.l);
          break;
        case 'poolIn':
        case 'poolOut':
          return matchmakerForward(o)
          break;
        default:
          return unexpected(msg);
          break;
      }
      
    } catch (e) {
      return unexpected(msg);
    }
  }  
}

