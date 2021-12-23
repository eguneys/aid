import fetch from 'node-fetch'
import User from '../user/user'

export type LiAuth = {
  username: string,
}
export class Study {

  constructor() {
  }


  async sanitize_fetch_link_to_pgn(user: User, _link: string) {
    if (!_link || _link.length > 100) {
      return undefined
    }
    let studyId = _link.substr(_link.length - 8)

    let study = await fetch(`https://lichess.org/api/study/${studyId}.pgn`, {
      headers: {
        'Authorization': `Bearer ${user.litoken}`
      }
    }).then(res => res.text())

    return study
  }
}
