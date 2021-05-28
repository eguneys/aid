export interface AnalyseData {

  treeParts: Tree.Node[];
  url: {
    socket: string
  }
}

export interface AnalyseOptions {
  data: AnalyseData;
}
