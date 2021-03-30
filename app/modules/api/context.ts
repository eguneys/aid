import { Nonce } from '../common';
import { UserContext } from '../user';

export interface PageData {
  nonce: Maybe<Nonce>
}

export function PageDataAnon() {
  return {
  };
};

export class Context {
  
  userContext: UserContext
  pageData: PageData
  nonce: Maybe<Nonce>

  constructor(userContext: UserContext,
              pageData: PageData) {
    this.userContext = userContext;
    this.pageData = pageData;
    this.nonce = pageData.nonce;
  }
  
}
