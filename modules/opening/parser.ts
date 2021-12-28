import Esrar, { erm, q } from 'esrar'
import Opening, { Chapter } from './opening'


export function import_chapters(opening: Opening, pgn: string) {

  let res = Esrar(pgn)


  if (!res) {
    return []
  }


  return res.pgns.map(qpgn => 
    Chapter.make(qpgn.tags.get('Event') || 'Dont have Event tag', opening)
  )
}
