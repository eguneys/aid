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
}

export interface StudyOptions {
  study: StudyData
}

export interface Position {
  chapterId: string;
  path: Tree.Path
}
