import * as ch from './chapter';

export type ToNewBook = ch.InAbook
export type ToNewChapter = ch.InBook
export type ToNewSection = ch.InChapter

export type ToNew =
  | ToNewBook
  | ToNewChapter
  | ToNewSection

export function isToNewBook(_: ToNew): _ is ToNewBook {
  return ch.isInABook(_);
}

export function isToNewChapter(_: ToNew): _ is ToNewChapter {
  return ch.isInBook(_);
}

export function isToNewSection(_: ToNew): _ is ToNewSection {
  return ch.isInChapter(_);
}
