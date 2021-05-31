import { initial, Color } from 'chesst';
import { nextString } from 'domnar';
import { SessionId } from '../security/session';
import Study from './study';
import Chapter, { ChapterSetup } from './chapter';
import { PGNImportResult } from './id2datas';
import { Node, NodeChildren, NodeRoot } from './node';

export default class ChapterMaker {

  constructor() {
    
  }

  fromBlank(study: Study, data: ChapterMakerData, sessionId: SessionId) {
    return Promise.resolve(//data.pgn?
      //this._fromPgn(study, data.pgn, data, sessionId):
      this._fromBlank(study, data, sessionId));
  }

  // _fromPgn(study: Study, pgn: string, data: ChapterMakerData, sessionId: SessionId) {

  //   let name = pgn.tags.get('Event');
    
  //   return Chapter.make(
  //     study.id,
  //     name,
  //     pgn.root,
  //     sessionId);
  // }

  _fromBlank(study: Study, data: ChapterMakerData, sessionId: SessionId) {

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
                        sessionId)
    
  }
  
}

export class ChapterMakerData {

  static make = (name: string,
                 pgn?: PGNImportResult) => new ChapterMakerData(name, pgn);

  name: string
  pgn: Maybe<PGNImportResult>;
  
  constructor(name: string, pgn?: PGNImportResult) {
    this.name = name;
    this.pgn = pgn;
  }
                 
  
}
