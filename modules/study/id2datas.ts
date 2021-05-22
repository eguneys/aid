import { study } from 'apil';
import { ChapterMakerData } from './chaptermaker';
import Esrar, { erm } from 'esrar';
import { NodeRoot, NodeChildren } from './node';

export default function id2datas(id: string) {

  // return study.allChapters(id).then((chapters: string) =>
  //   Esrar(chapters)?.pgns.map(pgn =>
  //     ChapterMakerData.make("", PGNImportResult.make(pgn))));
  
}


export class PGNImportResult {

  // static make = (qpgn: erm.QPGN) => {

  //   let root = NodeRoot.make({
  //     ply,
  //     fen,
  //     children: NodeChildren.make(
  //     )
  //   });
    
  //   new PGNImportResult(
  //     new Map(tags),
  //     root);
  // }
  
  tags: Map<string, string>
  root: NodeRoot

  constructor(tags: Map<string, string>,
              root: NodeRoot) {
    this.tags = tags;
    this.root = root;
  }
  
}
