import * as xhr from 'common/xhr';
import { kbt } from 'koob';

export const books = () =>
  xhr.json('/books');

export const chapters = (id: kbt.BookId) =>
  xhr.json(`/chapters/${id}`);

export const sections = (id: kbt.ChapterId) =>
  xhr.json(`/sections/${id}`);

export const newBook = (name: string) =>
  xhr.json('/books', {
    method: 'POST',
    body: xhr.form({
      name
    })
  });

export const newChapter = (bookId: kbt.BookId, name: string) =>
  xhr.json('/chapters', {
    method: 'POST',
    body: xhr.form({
      bookId,
      name
    })
  });

export const newSection = (chapterId: kbt.ChapterId, name: string) =>
  xhr.json('/sections', {
    method: 'POST',
    body: xhr.form({
      chapterId,
      name
    })
  });
