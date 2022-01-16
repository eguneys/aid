import fetch from 'node-fetch'
import User from '../user/user'


function url(path: string, params: { [k: string]: string | number | boolean }) {
  const searchParams = new URLSearchParams()
  for (const k of Object.keys(params)) searchParams.append(k, params[k] as string)
  const query = searchParams.toString()
  return query ? `${path}?${query}` : path
}

export class Games {


  async get_games(user: User) {

    let { username, litoken } = user

    let params = {
      max: 180,
      since: user.games_since + 1000
    }

    let games = await fetch(url(`https://lichess.org/api/games/user/${username}`, params), {
      headers: {
        'Authorization': `Bearer ${litoken}` 
      }
    }).then(res => res.text())

    return games
  }

}
