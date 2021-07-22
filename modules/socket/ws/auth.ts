import * as chest from '../../';
import { UserWithSession } from '../../security/session';

export default class Auth {

  constructor(readonly securityApi: chest.security.SecurityApi) {
    
  }
  
  apply(req: any): Fu<Maybe<UserWithSession>> {
    return this.securityApi.restoreUserSession(this.sessionIdFromReq(req));
  }

  sessionIdFromReq(req: any) {
    let cookie = req.headers.cookie;

    let match = cookie?.match(/sessionId=(\w+)/);
    return match?.[1];
  }
  
}
