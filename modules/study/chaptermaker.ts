import { nt } from 'tschess';
import { nextString } from 'domnar';
import { SessionId } from '../security/session';
import Study from './study';
import Chapter from './chapter';
import { Node, NodeChildren, NodeRoot } from './node';

export default class ChapterMaker {

  constructor() {
    
  }

  fromBlank(study: Study, data: ChapterMakerData, sessionId: SessionId) {
    return Promise.resolve(this._fromBlank(study, data, sessionId));
  }


  _fromBlank(study: Study, data: ChapterMakerData, sessionId: SessionId) {

    let root = NodeRoot.make({
      ply: 0,
      fen: nt.initialFen,
      children: NodeChildren.empty
    });

    return Chapter.make(study.id,
                        data.name,
                        root,
                        sessionId)
    
  }
  
}

export class ChapterMakerData {

  static make = (name: string) => new ChapterMakerData(name);

  name: string
  
  constructor(name: string) {
    this.name = name;
  }
                 
  
}
