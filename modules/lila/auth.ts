import oauth from 'simple-oauth2';
import fetch from 'node-fetch';

export type LiAuth = {
  username: string,
  token: string
}

export class Auth {

  client: oauth.AuthorizationCode
  authorizationUri: string
  redirectUri: string


  constructor(redirectUri: string, client_id: string, client_secret: string) {
    this.client = new oauth.AuthorizationCode({
      client: {
        id: client_id,
        secret: client_secret
      },
      auth: {
        tokenHost: 'https://oauth.lichess.org',
        authorizePath: '/oauth/authorize',
        tokenPath: '/oauth'
      },
      http: {
        json: true
      }
    });

    this.redirectUri = redirectUri;
    
    this.authorizationUri = this.client.authorizeURL({
      redirect_uri: redirectUri,
      scope: ['preference:read', 'challenge:write'],
      state: Math.random().toString(36).substring(2)
    });
  }

  async exchangeCode(code: string) {
    let token = await this.client.getToken({
      code,
      redirect_uri: this.redirectUri
    });

    let user = await fetch('https://lichess.org/api/account', {
      headers: {
        'Authorization': `Bearer ${token.token.access_token}`
      }
    }).then(res => res.json());


    if (user.error) {
      throw user.error;
    }

    return {
      username: user.username,
      token: token.token.access_token
    };
  }
}
