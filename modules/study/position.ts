import { AnyVal } from 'shared_common';
import Chapter, { ChapterId } from './chapter';
import Path from './path';

export default class Position {

  chapter: Chapter
  path: Path

  get ref():PositionRef {
    return new PositionRef(this.chapter.id, this.path);
  }
  
  constructor(chapter: Chapter, path: Path) {
    this.chapter = chapter;
    this.path = path;
  }
  
}

export class PositionRef implements AnyVal {

  static decode = (key: string) => {
    let [chapterId, path] = key.split(' ');
    return new PositionRef(chapterId, Path.make(path));
  };
  
  static make = (chapterId: ChapterId, path: Path) =>
    new PositionRef(chapterId, path);
  
  chapterId: ChapterId
  path: Path

  get key(): string {
    return `${this.chapterId} ${this.path.key}`;
  }

  get encode(): string {
    return this.key;
  }
  
  constructor(chapterId: ChapterId, path: Path) {
    this.chapterId = chapterId;
    this.path = path;
  }
  
}
