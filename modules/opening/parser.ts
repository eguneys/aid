import { sanorcastles_san, move_uci, situation_fen, Esrar, QMove, Situation, map } from 'chesstwo'
import Opening, { Chapter } from './opening'
import { MoveNode, MoveRoot } from './node'

export type ImportedGame = {
  since: number,
  fens: Map<Fen, Array<QMove>>
}


export function import_games(pgn: string): Array<ImportedGame> {
  let res = Esrar(pgn)

  if (!res) {
    return []
  }

  return res.pgns.map(qpgn => {
    let date = qpgn.tags.get('UTCDate'),
      time = qpgn.tags.get('UTCTime')

    let since = new Date(date + ' ' + time).valueOf()

    let { fens } = qpgn

    return {
      since,
      fens
    }
  })
}

export function import_chapters(opening: Opening, pgn: string) {

  let res = Esrar(pgn)


  if (!res) {
    return []
  }


  return res.pgns.map(qpgn => 
    Chapter.make(qpgn.tags.get('Event') || '', 
      opening,
      map(qpgn.variations, (qmove: QMove): MoveNode => ({
        ply: qmove.ply,
        fen_before: situation_fen(qmove.move.before),
        fen: situation_fen(qmove.move.after),
        glyphs: 'TODO',
        uci: move_uci(qmove.move),
        san: sanorcastles_san(qmove.extra.san),
        nb_made: 0,
        nb_reached: 0
      }), (situation: Situation): MoveRoot => ({
        ply: 1,
        fen: situation_fen(situation),
        glyphs: 'TODO'
      })),
      qpgn.tags.get('Site')
    )
  )
}
