import { h } from 'snabbdom';
import Ctrl from './ctrl';
import * as util from '../util';
import * as t from './types';

function vsSelectSection(ctrl: Ctrl, v: t.SectionsView) {
  return [
    h('div.headline.book', {
      hook: util.bind('click', e => {
        ctrl.openSelectBookView();
      }, ctrl.redraw)
    }, [h('i', '←'), v.book.name]),
    h('div.headline.chapter', {
      hook: util.bind('click', e => {
        ctrl.openSelectChapters(v.book);
      }, ctrl.redraw)
    }, [h('i', '←'), v.chapter.name]),
    ...v.sections.map(section =>
      h('div.item.section', {
        hook: util.bind('click', e => {
          // return ctrl.openSelectSections(chapter);
        }, ctrl.redraw)
      }, section.name)),
    h('button', {
      hook: util.bind('click', e => {
        ctrl.openNewBookDialog();
      }, ctrl.redraw)
    }, [
      h('i', '+'),
      'New Section'
    ])
  ];
}

function vsSelectChapter(ctrl: Ctrl, v: t.ChaptersView) {
  return [
    h('div.headline.book', {
      hook: util.bind('click', e => {
        ctrl.openSelectBookView();
      }, ctrl.redraw)
    }, [h('i', '←'), v.book.name]),
    ...v.chapters.map(chapter =>
      h('div.item.chapter', {
        hook: util.bind('click', e => {
          return ctrl.openSelectSections(chapter);
        }, ctrl.redraw)
      }, chapter.name)),
    h('button', {
      hook: util.bind('click', e => {
        ctrl.openNewBookDialog();
      }, ctrl.redraw)
    }, [
      h('i', '+'),
      'New Chapter'
    ])
  ];
}

function vsSelectBook(ctrl: Ctrl, v: t.BooksView) {
  return [
    h('div.headline', 'Select book'),
    ...v.books.map(book =>
      h('div.item.book', {
        hook: util.bind('click', e => {
          return ctrl.openSelectChapters(book);
        }, ctrl.redraw)
      }, book.name)),
    h('button', {
      hook: util.bind('click', e => {
        ctrl.openNewBookDialog();
      }, ctrl.redraw)
    }, [
      h('i', '+'),
      'New Book'
    ])
  ];
}

function vOpenBookPopup(ctrl: Ctrl) {
  let children;

  if (!ctrl.vSelectBook) {
    return null;
  } else if (t.isBooksView(ctrl.vSelectBook)) {
    children = vsSelectBook(ctrl, ctrl.vSelectBook);
  } else if (t.isChaptersView(ctrl.vSelectBook)) {
    children = vsSelectChapter(ctrl, ctrl.vSelectBook);
  } else if (t.isSectionsView(ctrl.vSelectBook)) {
    children = vsSelectSection(ctrl, ctrl.vSelectBook);
  }
  
  return h('div.popup.selectbook', {
    on: {
      click: e => e.stopPropagation()
    }
  }, children);
}

function vDropdown(ctrl: Ctrl) {
  return h('div.popup.dropdown', {
    class: {
      hidden: !ctrl.isBarOpen
    }
  }, [
    h('div.item', {
      hook: util.bind('click', _ => {
        _.stopPropagation();
        return ctrl.openSelectBookView();
      }, ctrl.redraw)
    }, [h('a', 'Open book')])
  ]);
}


export default function view(ctrl: Ctrl) {
  return h('div.rotide__bar', [h('div.rotide__bar__control', [
    vDropdown(ctrl),
    vOpenBookPopup(ctrl),
    h('div.open', {
      hook: util.bind('click', _ => {
        _.stopPropagation();
        ctrl.toggle();
      }, ctrl.redraw)
    }, ['⋮'])
  ])]);
  
}
