import { kbt } from 'koob';
import { e, nextString } from '../common';

export function book(body: any): e.Either<kbt.Book, string> {
  let { name } = body;

  if (!name) {
    return e.right('Name is required');
  } else {
    return e.left({
      id: nextString(8),
      name
    });
  }
}

export function chapter(body: any): e.Either<kbt.Chapter, string> {
  let { name, bookId } = body;

  if (!name) {
    return e.right('Name is required');
  } if (!bookId) {
    return e.right('Book id is required');
  } else {
    return e.left({
      id: nextString(8),
      bookId,
      name
    });
  }
}

export function section(body: any): e.Either<kbt.Section, string> {
  let { name, chapterId } = body;

  if (!name) {
    return e.right('Name is required');
  } if (!chapterId) {
    return e.right('Chapter id is required');
  } else {
    return e.left({
      id: nextString(8),
      chapterId,
      name
    });
  }
}

