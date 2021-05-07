import { kbt } from 'koob';

export type BooksView = {
  books: Array<kbt.Book>
}
export type ChaptersView = {
  book: kbt.Book,
  chapters: Array<kbt.Chapter>,
  contents: Array<kbt.Content>
}
export type SectionsView = {
  book: kbt.Book,
  chapter: kbt.Chapter,
  sections: Array<kbt.Section>,
  contents: Array<kbt.Content>
}

export type SectionView = {
  book: kbt.Book,
  chapter: kbt.Chapter,
  section: kbt.Section,
  contents: Array<kbt.Content>
}

export type SelectBookView =
  | BooksView
  | ChaptersView
  | SectionsView
  | SectionView

export function isSectionView(v: SelectBookView): v is SectionView {
  return ((v as SectionView).section !== undefined);
}

export function isSectionsView(v: SelectBookView): v is SectionsView {
  return ((v as SectionsView).sections !== undefined);
}
export function isChaptersView(v: SelectBookView): v is ChaptersView {
  return ((v as ChaptersView).chapters !== undefined);
}

export function isBooksView(v: SelectBookView): v is BooksView {
  return ((v as BooksView).books !== undefined);
}
