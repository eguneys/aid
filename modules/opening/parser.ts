import { sanorcastles_san, move_uci, situation_fen, Esrar, QMove, Situation, map } from 'chesstwo'
import Opening, { Chapter } from './opening'
import { MoveNode, MoveRoot } from './node'


export function import_chapters(opening: Opening, pgn: string) {

  let res = Esrar(pgn)


  if (!res) {
    return []
  }


  return res.pgns.map(qpgn => 
    Chapter.make(qpgn.tags.get('Event') || 'Dont have Event tag', 
      opening,
      map(qpgn.variations, (qmove: QMove): MoveNode => ({
        ply: qmove.ply,
        fen: situation_fen(qmove.move.after),
        comments: 'TODO',
        glyphs: 'TODO',
        uci: move_uci(qmove.move),
        san: sanorcastles_san(qmove.extra.san)
      }), (situation: Situation): MoveRoot => ({
        ply: 1,
        fen: situation_fen(situation),
        comments: 'TODO',
        glyphs: 'TODO'
      })))
  )
}
