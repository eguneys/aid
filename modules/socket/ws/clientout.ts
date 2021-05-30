export type ClientOut = {
  kind: string
}

export type Ping = {
  kind: 'ping',
  lag?: number
};

export type Unexpected = {
  kind: 'unexpected',
  msg: string
};

export const emptyPing = {
  kind: 'ping'
};

export const unexpected = (msg: string) => ({
  kind: 'unexpected',
  msg
});

export function isPing(_: any): _ is Ping {
  if (typeof _ === 'object') {
    if ((_ as Ping).kind === 'ping') {
      return true;
    }
  }
  return false;
}


export function isUnexpected(_: any): _ is Unexpected {
  if (typeof _ === 'object') {
    if ((_ as Unexpected).kind === 'unexpected') {
      return true;
    }
  }
  return false;
}

export function parse(msg: string) {

  if (msg === 'null' || msg === `{"t":"p"}`) {
    return emptyPing;
  } else {
    try {
      return JSON.parse(msg);
    } catch (e) {
      return unexpected(msg);
    }
  }  
}
