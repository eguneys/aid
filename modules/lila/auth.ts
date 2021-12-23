import fetch from 'node-fetch'
import crypto from 'crypto'

export type LiAuth = {
  username: string,
  token: string
}

const base64URLEncode = (str: Buffer): string => {
  return str.toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=/g, '')
}

const sha256 = (buffer: string) => crypto.createHash('sha256').update(buffer).digest()


const createVerifier = () => base64URLEncode(crypto.randomBytes(32))

const createChallenge = (verifier: string) => base64URLEncode(sha256(verifier))

export class Auth {

  constructor(readonly redirect_uri: string,
    readonly client_id: string,
    readonly client_secret: string) {
  }


  async authorizationUri(req: any) {

    let { redirect_uri, client_id } = this

    const verifier = createVerifier()
    const challenge = createChallenge(verifier)

    req.session.verifier = verifier

    return 'https://lichess.org/oauth?' + 
      new URLSearchParams({
        response_type: 'code',
        client_id,
        redirect_uri,
        scope: 'preference:read study:read',
        code_challenge_method: 'S256',
        code_challenge: challenge
      })
  }

  async exchangeCode(req: any, code: string) {

    let { client_id, redirect_uri } = this
    let code_verifier = req.session.verifier

    let token = await fetch('https://lichess.org/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        redirect_uri,
        client_id,
        code,
        code_verifier
      })
    }).then(res => res.json())

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
    };
  }
}
