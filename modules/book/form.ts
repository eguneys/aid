import { kbt } from 'koob';
import { e, nextString } from '../common';

export function bookId(body: any): e.Either<kbt.BookId, string> {
  let { id } = body;

  if (id.length !== 8) {
    return e.right('Invalid book id');
  } else {
    return e.left(id);
  }
}

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


export function updateContent(body: any): e.Either<kbt.UpdateContent, string> {
  let { content } = body;

  if (!content) {
    return e.right('Content is required');
  } else {
    return e.left({ content });
  }
}

export function content(body: any): e.Either<kbt.Content, string> {
  let { name, content, sourceId } = body;

  if (!name) {
    return e.right('Name is required');
  }
  if (!content) {
    return e.right('Content is required');
  }
  if (!sourceId) {
    return e.right('Source id is required');
  }

  return e.left({
    id: nextString(8),
    sourceId,
    name,
    content
  });
}
