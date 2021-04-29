import { kbte, kbt, kba, kbu, kblr } from 'koob';
import { Coll } from '../db/coll';
import { nextString } from '../common';


export class BookRepo {

  coll: Coll<kbt.Book>
  chapterColl: Coll<kbt.Chapter>
  sectionColl: Coll<kbt.Section>
  contentColl: Coll<kbt.Content>
  relColl: Coll<kblr.SessionBook>
  collOptions: Coll<kbte.BookOptions>

  constructor(coll: Coll<kbt.Book>,
              chapterColl: Coll<kbt.Chapter>,
              sectionColl: Coll<kbt.Section>,
              contentColl: Coll<kbt.Content>,
              relColl: Coll<kblr.SessionBook>,
              collOptions: Coll<kbte.BookOptions>) {
    this.coll = coll;
    this.chapterColl = chapterColl;
    this.sectionColl = sectionColl;
    this.contentColl = contentColl;
    this.relColl = relColl;
    this.collOptions = collOptions;
  }

  async insertOptions(options: kbte.BookOptions) {
    this.collOptions.insert(options);
  }
  
  async insert(book: kbt.Book) {
    return this.coll.insert(book)
  }

  async delete(bookId: kbt.BookId) {
    return this.coll.delete(bookId);
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

  async allBySessionId(sessionId: kba.SessionId, userId: Maybe<kbu.UserId>) {
    let userOrSession = userId ? {userId}: {sessionId};
    return this.relColl.find(userOrSession).then(_ => {
      return Promise.all(_.map(_ => this.coll.find({ id: _.bookId })))
        .then(_ => _.flat())
    });
  }

  async allFeatured() {
    return this.collOptions
      .find({featured: true})
      .then(_ =>
        Promise.all(_.map(_ => this.coll.find({ id: _.bookId }))))
      .then(_ => _.flat());
                                                        
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

  async insertContentDenormalized(update: kbt.UpdateContent, sourceId: kbt.SourceId) {
    let content = {
      ...update,
      sourceId,
      name: 'default',
      id: nextString(8)
    };
    
    await this.contentColl.insert(content);
    return content;
  }

  async updateContent(contentId: kbt.ContentId, update: kbt.UpdateContent) {
    return this.contentColl.update(contentId, update);
  }

  async insertSessboo(sessionId: kba.SessionId, userId: Maybe<kbu.UserId>, bookId: kbt.BookId) {
    return this.relColl.insert({
      id: nextString(8),
      sessionId,
      userId,
      bookId
    });
  }
  
}
