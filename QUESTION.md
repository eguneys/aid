I have a bunch of analysed chess game openings with variations. I store the move and fen after each move in a tree data structure. 

I want to keep 2 statistics for each move, how many times the position has been reached, how many times the move has been made from that position.

So I iterate through previous game history and collect this data in a structure:

type PosStat = {
  id: string,
  fen: string,
  nb_reached: number
}


type MoveStat = {
  id: string,
  pos_stat_before: string,
  move_uci: string,
  nb_made: number
}



