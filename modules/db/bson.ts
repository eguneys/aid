export type Doc = {
  [key in string]: any
}

export interface BSON<A> {
  read(doc: Doc): A,
  write(a: A): Doc
}

export type DocId = Doc & {
  id: string
}

export interface BSONId<A> {
  read(doc: DocId): A,
  write(a: A): DocId
}

export const defaultBsonHandler = <A extends DocId>(): BSONId<A> => ({

  read(doc: DocId): A {
    return doc as A;
  },

  write(a: A): DocId {
    return a;
  }
});
