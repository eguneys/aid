import { Node } from './node';
import { uc } from 'tschess';
import { AnyVal } from 'shared_common';

export function encodeDbKey(pair: uc.UciCharPair): string;
export function encodeDbKey(pathStr: String): string;
export function encodeDbKey(path: Path): string;
export function encodeDbKey(_: any): string {
  if (typeof _ === 'string') {
    return _;
  } else if (isPath(_)) {
    return encodeDbKey(_.ids.join(''));
  } else {
    return _;
  }
}
export const decodeDbKey = (key: string): string => key;

export const fromDbKey = (key: string): Path => Path.make(decodeDbKey(key));

export const rootDbKey = '_';

export default class Path implements AnyVal {

  static make = (str: string): Path => {
    let ids = str.split(/(..)/)
      .filter(_ => _.length === 2)
      .map(_ =>
        uc.make(_[0], _[1]));
    return new Path(ids);
  }

  static root = Path.make('');

  ids: Array<uc.UciCharPair>

  get key(): string {
    return this.ids.join('');
  }

  get head(): Maybe<uc.UciCharPair> {
    return this.ids[0];
  }

  get parent(): Path {
    let ids = this.ids.slice(0, this.ids.length - 1);
    return new Path(ids);
  }

  get isEmpty():boolean {
    return this.ids.length === 0;
  }

  
  constructor(ids: Array<uc.UciCharPair>) {
    this.ids = ids;
  }


  add(more: Path): Path;
  add(node: Node): Path;
  add(id: uc.UciCharPair): Path;
  add(_: any): Path {
    if (typeof _ === 'string') {
      return new Path([...this.ids, _]);
    } else if (isPath(_)) {
      return new Path([...this.ids, ..._.ids]);
    } else {
      return new Path([...this.ids, _.id])      
    } 
  }

  
  
}

export function isPath(_: any): _ is Path {
  return ((_ as Path).ids !== undefined);
}
