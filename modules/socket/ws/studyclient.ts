import WsClient from './client';
import { StudyId } from '../../study/study';
import { ClientEmit } from './types';
import { UserWithSession } from '../../security/session';
import * as cout from './clientout';

export default class StudyClient extends WsClient {

  static make = (id: StudyId,
                 clientIn: ClientEmit,
                 req: any,
                 sri: string,
                 user: Maybe<UserWithSession>) =>
    new StudyClient(clientIn,
                    sri,
                   user);

  constructor(clientIn: ClientEmit,
              sri: string,
              user: Maybe<UserWithSession>) {
    super(clientIn,
          sri,
          user);
  }
  

  out(msg: string) {
    
    if (cout.isAddChapter(msg)) {
      console.log(msg);
    } else {
      super.out(msg);
    }
  };
  
}
