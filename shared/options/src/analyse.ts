import { StudyData } from './study';

export interface AnalyseData {
  treeParts: Tree.Node[];
}

export interface AnalyseOptions {
  data: AnalyseData;
  study?: StudyData;
  socketUrl: string;
  socketVersion: number;
}
