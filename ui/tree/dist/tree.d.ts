/// <reference types="chest" />
export default class TreeWrapper {
    static make: (root: Tree.Node) => TreeWrapper;
    root: Tree.Node;
    constructor(root: Tree.Node);
    getNodeList(path: Tree.Path): Tree.Node[];
}
