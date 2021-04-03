import { kbt } from 'koob';
import { Coll } from '../db/coll';


export class BookRepo {

  coll: Coll
  chapterColl: Coll
  sectionColl: Coll

  constructor(coll: Coll,
              chapterColl: Coll,
              sectionColl: Coll) {
    this.coll = coll;
    this.chapterColl = chapterColl;
    this.sectionColl = sectionColl;
  }
  
  async insert(book: kbt.Book) {
    return this.coll.insert(book)
  }

  async all() {
    return this.coll
      .find({});
  }

  async chapters(bookId: string) {
    return this.chapterColl
      .find({bookId});
  }

  async insertChapter(chapter: kbt.Chapter) {
    return this.chapterColl.insert(chapter);
  }

  async sections(chapterId: string) {
    return this.sectionColl
      .find({chapterId});
  }

  async insertSection(section: kbt.Section) {
    return this.sectionColl.insert(section);
  }
  
}
