export type RoundData = {
  game: RoundGame,
  url: {
    socket: string
  }
}


export type RoundGame = {
  aTeam: RoundTeam,
  bTeam: RoundTeam
}

export type RoundTeam = {
  color: string,
  players: Array<RoundPlayer>
}

export type RoundPlayer = {
  name: string
}
