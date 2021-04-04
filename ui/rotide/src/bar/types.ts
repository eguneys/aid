import { kbt } from 'koob';

export type BooksView = {
  books: Array<kbt.Book>
}
export type ChaptersView = {
  book: kbt.Book,
  chapters: Array<kbt.Chapter>
}
export type SectionsView = {
  book: kbt.Book,
  chapter: kbt.Chapter,
  sections: Array<kbt.Section>
}

export type SelectBookView =
  | BooksView
  | ChaptersView
  | SectionsView

export function isSectionsView(v: SelectBookView): v is SectionsView {
  return ((v as SectionsView).sections !== undefined);
}
export function isChaptersView(v: SelectBookView): v is ChaptersView {
  return ((v as ChaptersView).chapters !== undefined);
}

export function isBooksView(v: SelectBookView): v is BooksView {
  return ((v as BooksView).books !== undefined);
}
