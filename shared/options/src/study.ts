export interface StudyData {
  id: string;
  name: string;
  position: Position;
  chapters: StudyChapterMeta[];
  chapter: StudyChapter;
}

export interface StudyChapterMeta {
  id: string;
  name: string;
}

export interface StudyChapter {
  id: string;
  name: string;
  ownerId: string;
  setup: StudyChapterSetup;
}

export interface StudyChapterSetup {
  orientation: LongColor;
  fromFen?: string;
}

export interface StudyOptions {
  study: StudyData;
}

export interface ChapterData {
  name: string;
  fen?: Fen;
  pgn?: string;
  orientation: Orientation;
}

export interface Position {
  chapterId: string;
  path: Tree.Path
}

export interface AnaMove {
  uci: string;
  fen: string;
  path: string;
  ch?: string;
}
