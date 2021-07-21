import openid from 'openid';
import fetch from 'node-fetch';

export type SteamProfile = {
  steamid: string,
  personaname: string,
  avatar: string
};


export class Auth {

  relyingParty: any
  
  constructor(readonly redirectUri: string,
              readonly realm: string,
              readonly apiKey: string) {

    this.relyingParty = new openid.RelyingParty(
      redirectUri,
      realm,
      true,
      true,
      []
    )
    
  }

  get redirectUrl() {
    return new Promise((resolve, reject) => {
      this.relyingParty.authenticate(
        'https://steamcommunity.com/openid',
        false, (error: any, authUrl: string) => {
          if (error) return reject('Authentication failed: ' + error);
          if (!authUrl) return reject('Authentication failed');

          resolve(authUrl);
        });
    });
  }

  async authenticate(req: any): Fu<Maybe<SteamProfile>> {
    return new Promise((resolve, reject) => {
      this.relyingParty.verifyAssertion(req, async(error: any, result: any) => {
        if (error) {
          return reject(error.message);
        }
        if (!result || !result.authenticated) {
          return reject('Failed to authenticate user.'); 
        }
        if (!/^https?:\/\/steamcommunity\.com\/openid\/id\/\d+$/.test(
          result.claimedIdentifier
        )) {
          return reject('Claimed identity is not valid.');
        }


        try {
          const user = await this.fetchIdentifier(result.claimedIdentifier);
          return resolve(user);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  async fetchIdentifier(steamOpenId: string): Fu<Maybe<SteamProfile>> {
    const apiKey = this.apiKey;
    const steamId = steamOpenId.replace('https://steamcommunity.com/openid/id/',
                                         '');

    const response = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}&format=json`);
    const body = await response.json();

    let player = body?.response?.players?.[0];

    if (!player) {
      throw 'No Players found';
    }

    return player;
  }
  
}
