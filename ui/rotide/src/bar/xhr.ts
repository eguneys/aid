import { kbt } from 'koob';

const fixtures = {
  books: [{
    id: '1',
    name: `King's Gambit`
  }],
  chapters: [{
    id: '1',
    bookId: '1',
    name: 'Chapter 1'
  }, {
    id: '2',
    bookId: '1',
    name: 'Chapter 2'
  },{
    id: '3',
    bookId: '1',
    name: 'Chapter 3'
  },{
    id: '4',
    bookId: '1',
    name: 'Chapter 4'
  }],
  sections: [{
    id: '1',
    chapterId: '1',
    name: 'Section 1'
  }, {
    id: '2',
    chapterId: '1',
    name: 'Section 2'
  },{
    id: '3',
    chapterId: '1',
    name: 'Section 3'
  }]
}

export const mockXhr = {
  books() {
    return Promise.resolve(fixtures.books);
  },

  chapters(id: kbt.BookId) {
    return Promise.resolve(fixtures.chapters);
  },

  sections(id: kbt.ChapterId) {
    return Promise.resolve(fixtures.sections);
  }

  
}
