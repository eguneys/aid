import { initial, Color } from 'chesst';
import { nextString } from 'domnar';
import { SessionOrUserId } from '../security/session';
import Study from './study';
import Chapter, { ChapterSetup } from './chapter';
import { PGNImportResult } from './id2datas';
import { Node, NodeChildren, NodeRoot } from './node';
import { ChapterData } from 'shared_options';
import { Who } from '../socket/ws/actorApi';

export default class ChapterMaker {

  constructor() {
    
  }

  apply(study: Study, data: ChapterMakerData, sessionOrUserId: SessionOrUserId) {
    return Promise.resolve(
      this._fromBlank(study, data, sessionOrUserId)
    );
  }

  fromBlank(study: Study, data: ChapterMakerData, sessionOrUserId: SessionOrUserId) {
    return Promise.resolve(//data.pgn?
      //this._fromPgn(study, data.pgn, data, sessionId):
      this._fromBlank(study, data, sessionOrUserId));
  }

  // _fromPgn(study: Study, pgn: string, data: ChapterMakerData, sessionId: SessionId) {

  //   let name = pgn.tags.get('Event');
    
  //   return Chapter.make(
  //     study.id,
  //     name,
  //     pgn.root,
  //     sessionId);
  // }

  _fromBlank(study: Study, data: ChapterMakerData, sessionOrUserId: SessionOrUserId) {

    let root = NodeRoot.make({
      ply: 0,
      fen: initial,
      children: NodeChildren.empty
    });

    let setup = ChapterSetup.make(
      Color.white
    );

    return Chapter.make(study.id,
                        data.name,
                        setup,
                        root,
                        sessionOrUserId)
    
  }
  
}

export class ChapterMakerData {

  static fromChapterData = (data: ChapterData) =>
    new ChapterMakerData(data.name);
  
  static make = (name: string,
                 pgn?: PGNImportResult) => new ChapterMakerData(name, pgn);

  name: string
  pgn: Maybe<PGNImportResult>;
  
  constructor(name: string, pgn?: PGNImportResult) {
    this.name = name;
    this.pgn = pgn;
  }
                 
  
}
