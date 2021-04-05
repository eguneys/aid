import { kbt } from 'koob';
import { Coll } from '../db/coll';


export class BookRepo {

  coll: Coll<kbt.Book>
  chapterColl: Coll<kbt.Chapter>
  sectionColl: Coll<kbt.Section>
  contentColl: Coll<kbt.Content>

  constructor(coll: Coll<kbt.Book>,
              chapterColl: Coll<kbt.Chapter>,
              sectionColl: Coll<kbt.Section>,
              contentColl: Coll<kbt.Content>) {
    this.coll = coll;
    this.chapterColl = chapterColl;
    this.sectionColl = sectionColl;
    this.contentColl = contentColl;
  }
  
  async insert(book: kbt.Book) {
    return this.coll.insert(book)
  }

  async book(bookId: kbt.BookId) {
    return this.coll.one({id: bookId});
  }

  async chapter(chapterId: kbt.ChapterId) {
    return this.chapterColl.one({id: chapterId});
  }

  async section(sectionId: kbt.SectionId) {
    return this.sectionColl.one({ id: sectionId});
  }

  async content(contentId: kbt.ContentId) {
    return this.contentColl.one({ id: contentId });
  }

  async contentBySourceId(sourceId: kbt.SourceId) {
    return this.contentColl.one({ sourceId });
  }

  async all() {
    return this.coll
      .find({});
  }

  async chapters(bookId: kbt.BookId) {
    return this.chapterColl
      .find({bookId});
  }

  async insertChapter(chapter: kbt.Chapter) {
    return this.chapterColl.insert(chapter);
  }

  async sections(chapterId: kbt.ChapterId) {
    return this.sectionColl
      .find({chapterId});
  }

  async insertSection(section: kbt.Section) {
    return this.sectionColl.insert(section);
  }

  async contents(sourceId: kbt.SourceId) {
    return this.contentColl
      .find({sourceId});
  }

  async insertContent(content: kbt.Content) {
    return this.contentColl.insert(content);
  }

  async updateContent(contentId: kbt.ContentId, update: kbt.UpdateContent) {
    return this.contentColl.update({id: contentId }, update);
  }  
  
}
