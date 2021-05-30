import WsClient from './client';
import { StudyId } from '../../study/study';
import { ClientEmit } from './types';
import { UserWithSession } from '../../security/session';

export default class StudyClient extends WsClient {

  static make = (id: StudyId,
                 clientIn: ClientEmit,
                 req: any,
                 sri: string,
                 user: Maybe<UserWithSession>) => new StudyClient(clientIn);

  constructor(clientIn: ClientEmit) {
    super(clientIn);
  }
  

  out(msg: string) {
    super.out(msg);
  };
  
}
