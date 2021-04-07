import { h } from 'snabbdom';
import Ctrl from './ctrl';
import { kbt } from 'koob';
import { kbm } from 'koobm';

export function vBook(ctrl: Ctrl, book: kbt.Book) {
  return h('h2.book', [book.name]);
}
export function vSection(ctrl: Ctrl, section: kbt.Section) {
  return h('div.section', [section.name]);
}
export function vChapter(ctrl: Ctrl, chapter: kbt.Chapter) {
  return h('h3.chapter', [chapter.name]);
}

export function vContentm(ctrl: Ctrl, contentm: kbm.ContentM) {
  return h('div.content', [h('a', contentm.name)]);
}

export function vContents(ctrl: Ctrl, contents: Array<kbm.ContentM>) {
  return h('div.contents', contents.map(_ => vContentm(ctrl, _)));
}

export function vChapterm(ctrl: Ctrl, { chapter, sections, contents }: kbm.ChapterM) {
  return h('div.chapterm', [
    vChapter(ctrl, chapter),
    vContents(ctrl, contents),
    h('div.sections', sections.map(_ => vSectionm(ctrl, _)))
  ]);
}

export function vSectionm(ctrl: Ctrl, { section, contents }: kbm.SectionM) {
  return h('div.sectionm', [
    vContents(ctrl, contents),
    vSection(ctrl, section)
  ]);
}

export function vBookm(ctrl: Ctrl, { book, chapters, contents }: kbm.BookM) {
  return h('div.bookm', [
    vBook(ctrl, book),
    vContents(ctrl, contents),
    h('div.chapters', chapters.map(_ => vChapterm(ctrl, _)))
  ]);
}

export default function view(ctrl: Ctrl) {

  return h('div.reptor__all', [
    ...ctrl.books.map(_ => vBookm(ctrl, _))
  ]);
}
