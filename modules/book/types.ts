export type BookId = string
export type ChapterId = string
export type SectionId = string

export type Book = {
  id: BookId,
  name: string
}

export type Chapter = {
  id: ChapterId,
  bookId: BookId,
  name: string
}

export type Section = {
  id: SectionId,
  chapterId: ChapterId,
  name: string,
  content: string
}
