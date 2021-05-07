import { VNode, h } from 'snabbdom';
import Ctrl from './ctrl';
import * as util from '../util';
import * as t from './types';
import { kbt } from 'koob';

function vContent(ctrl: Ctrl, v: t.SelectBookView, content: kbt.Content) {
  return h('div.item.content', {
    hook: util.bind('click', e => {
      return ctrl.openContent(v, content);
    }, ctrl.redraw)
  }, content.name)
}

function vsSelectSection(ctrl: Ctrl, v: t.SectionView) {
  return [
    h('div.headline.book', {
      hook: util.bind('click', e => {
        return ctrl.openSelectBookView();
      }, ctrl.redraw)
    }, [h('i', '←'), v.book.name]),
    h('div.headline.chapter', {
      hook: util.bind('click', e => {
        return ctrl.openSelectChapters(v.book);
      }, ctrl.redraw)
    }, [h('i', '←'), v.chapter.name]),
    h('div.headline.section', {
      hook: util.bind('click', e => {
        return ctrl.openSelectSections(v.chapter);
      }, ctrl.redraw)
    }, [h('i', '←'), v.section.name]),
    ...v.contents.map(_ => vContent(ctrl, v, _)),
    
    h('div.buttons.section', [
      h('div.button', {
        hook: util.bind('click', e => {
          return ctrl.openNewContentDialog();
        }, ctrl.redraw)
      }, [
        h('i', '+'),
        'New Content'
      ])
    ])
  ];
}

function vsSelectSections(ctrl: Ctrl, v: t.SectionsView) {
  return [
    h('div.headline.book', {
      hook: util.bind('click', e => {
        return ctrl.openSelectBookView();
      }, ctrl.redraw)
    }, [h('i', '←'), v.book.name]),
    h('div.headline.chapter', {
      hook: util.bind('click', e => {
        return ctrl.openSelectChapters(v.book);
      }, ctrl.redraw)
    }, [h('i', '←'), v.chapter.name]),
    ...v.sections.map(section =>
      h('div.item.section', {
        hook: util.bind('click', e => {
          return ctrl.openSelectSection(section);
        }, ctrl.redraw)
      }, section.name)),
    ...v.contents.map(_ => vContent(ctrl, v, _)),
    h('div.buttons.section', [
      h('div.button', {
        hook: util.bind('click', e => {
          return ctrl.openNewContentDialog();
        }, ctrl.redraw)
      }, [
        h('i', '+'),
        'New Content'
      ]),
      h('div.separator'),
      h('div.button', {
        hook: util.bind('click', e => {
          return ctrl.openNewBookDialog();
        }, ctrl.redraw)
      }, [
        h('i', '+'),
        'New Section'
      ])
    ])
  ];
}

function vsSelectChapters(ctrl: Ctrl, v: t.ChaptersView) {
  return [
    h('div.headline.book', {
      hook: util.bind('click', e => {
        return ctrl.openSelectBookView();
      }, ctrl.redraw)
    }, [h('i', '←'), v.book.name]),
    ...v.chapters.map(chapter =>
      h('div.item.chapter', {
        hook: util.bind('click', e => {
          return ctrl.openSelectSections(chapter);
        }, ctrl.redraw)
      }, chapter.name)),
    ...v.contents.map(_ => vContent(ctrl, v, _)),
    h('div.buttons.chapter', [
      h('div.button', {
        hook: util.bind('click', e => {
          return ctrl.openNewContentDialog();
        }, ctrl.redraw)
      }, [
        h('i', '+'),
        'New Content'
      ]),
      h('div.separator'),
      h('div.button', {
        hook: util.bind('click', e => {
          return ctrl.openNewBookDialog();
        }, ctrl.redraw)
      }, [
        h('i', '+'),
        'New Chapter'
      ])
    ])
  ];
}

function vsSelectBooks(ctrl: Ctrl, v: t.BooksView) {
  return [
    h('div.headline', 'Select book'),
    ...v.books.map(book =>
      h('div.item.book', {
        hook: util.bind('click', e => {
          return ctrl.openSelectChapters(book);
        }, ctrl.redraw)
      }, book.name)),
    h('div.buttons.book', [
      h('div.button', {
        hook: util.bind('click', e => {
          return ctrl.openNewBookDialog();
        }, ctrl.redraw)
      }, [
        h('i', '+'),
        'New Book'
      ])
    ])
  ];
}

function vOpenBookPopup(ctrl: Ctrl) {
  let children;

  if (!ctrl.vSelectBook) {
    return null;
  } else if (t.isBooksView(ctrl.vSelectBook)) {
    children = vsSelectBooks(ctrl, ctrl.vSelectBook);
  } else if (t.isChaptersView(ctrl.vSelectBook)) {
    children = vsSelectChapters(ctrl, ctrl.vSelectBook);
  } else if (t.isSectionsView(ctrl.vSelectBook)) {
    children = vsSelectSections(ctrl, ctrl.vSelectBook);
  } else if (t.isSectionView(ctrl.vSelectBook)) {
    children = vsSelectSection(ctrl, ctrl.vSelectBook);
  }
  
  return h('div.popup.selectbook', {
    on: {
      click: e => e.stopPropagation()
    }
  }, children);
}

function vContentSave(ctrl: Ctrl) {
  let { content } = ctrl.baseCtrl;

  let children: Array<VNode> = [];
  
  if (content && ctrl.baseCtrl.hasUnsavedChanges()) {
    children = [
      
      h('div.button.button-red', {
       hook: util.bind('click', e => {
          e.stopPropagation();
          return ctrl.baseCtrl.saveContent();
        }, ctrl.redraw)
      }, 'Save Content')
    ];
  }
  
  return h('div.buttons', children);
}

function vContentHeadline(ctrl: Ctrl) {
  let { content } = ctrl.baseCtrl;
  
  return h('div.headline.content', [`_content_`, content.name]);
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
    }, [h('a', 'Open book')]),
    vContentHeadline(ctrl),
    vContentSave(ctrl),
  ]);
}


export default function view(ctrl: Ctrl) {
  return h('div.rotide__bar', [h('div.rotide__bar__control', [
    vDropdown(ctrl),
    vOpenBookPopup(ctrl),
    h('div.button.open', {
      class: {
        'button-red': ctrl.baseCtrl.hasUnsavedChanges()
      },
      hook: util.bind('click', _ => {
        _.stopPropagation();
        ctrl.toggle();
      }, ctrl.redraw)
    }, ['⋮'])
  ])]);
  
}
