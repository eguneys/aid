
import fetch from 'node-fetch'

export type LiAuth = {
  username: string,
}
export class Study {

  constructor() {
  }


  async authorizationUri(req: any) {
    let user = await fetch('https://lichess.org/api/account', {
      headers: {
        'Authorization': `Bearer ${token.access_token}`
      }
    }).then(res => res.json());


    if (user.error) {
      throw user.error;
    }

    return {
      username: user.username,
      token: token.access_token
    }
  }
}
