import { ChapterData }  from 'shared_options';

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


export interface AddChapter extends ClientOut {
  t: 'addChapter',
  d: ChapterData
}

export function isChapterData(_: any): _ is ChapterData {
  if (typeof _ === 'object') {
    let cd = (_ as ChapterData);
    if (typeof cd.name === 'string' &&
      typeof cd.orientation === 'string') {
      if (!cd.fen || typeof cd.fen === 'string' &&
        !cd.pgn || typeof cd.pgn === 'string') {
        return true;
      }
    }
  }
  return false;
}

export function isAddChapter(_: any): _ is AddChapter {
  if (typeof _ === 'object') {
    let ac = (_ as AddChapter);
    if (ac.t === 'addChapter') {
      return isChapterData(ac.d);
    }
  }
  return false;
}
