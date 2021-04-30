import { BSONId, DocId } from '../db/bson';
import Session from './session';


export type SessionDoc = DocId & {
  
}

export const SessionBSONHandler: BSONId<Session> = {
  read(doc: SessionDoc): Session {
    return Session.make(doc);
  },

  write(session: Session): SessionDoc {
    let res: SessionDoc = {
      id: session.id,
      createdAt: session.createdAt,
    };

    if (session.userId) {
      res.userId = session.userId;
    }
    
    return res;
  }
};
