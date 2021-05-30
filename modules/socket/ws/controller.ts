import { StudyId } from '../../study/study';
import { ClientEmit } from './types';
import StudyClient from './studyclient';
import Auth from './auth';
import { UserWithSession } from '../../security/session';

export default class Controller {

  static make = (auth: Auth) => new Controller(auth);

  constructor(readonly auth: Auth) {
    
  }
  
  study(req: any, id: StudyId, emit: ClientEmit): Fu<Maybe<StudyClient>> {
    return this.WebSocket(req)((sri, user) =>  {
      return StudyClient.make(id,
                              emit,
                              req,
                              sri,
                              user);
    });
    
  }


  WebSocket(req: any) {
    return async (op: (sri: string, muser: Maybe<UserWithSession>) => StudyClient) => {
      let sri = this.ValidSri(req);
      if (sri) {
        let user = await this.auth.apply(req);
        return op(sri, user);
      }      
    };
  }

  ValidSri(req: any) {
    let [_, params] = req.url.split('?');
    if (params) {
      let match = params.match(/sri=([a-zA-Z0-9]*)/);

      if (match) {
        let sri = match[1];
        return sri;
      }
    }
  }
  
}
