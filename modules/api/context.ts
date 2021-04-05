import { Nonce } from '../common';
import { UserContext, UserContextWrapper } from '../user';

export interface PageData {
  nonce: Maybe<Nonce>
}

export function PageData(nonce: Maybe<Nonce>) {
  return {
    nonce
  };
}

export function PageDataAnon(nonce: Maybe<Nonce>) {
  return {
    nonce
  };
};

export class Context extends UserContextWrapper {
  
  pageData: PageData
  nonce: Maybe<Nonce>
  
  constructor(userContext: UserContext,
              pageData: PageData) {
    super(userContext);
    this.pageData = pageData;
    this.nonce = pageData.nonce;
  }
  
}
