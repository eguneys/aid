/// <reference types="chest" />
export declare function collect(from: Tree.Node, pickChild: (node: Tree.Node) => Tree.Node | undefined): Tree.Node[];
export declare function first(nodeList: Tree.Node[]): Tree.Node | undefined;
export declare function childById(node: Tree.Node, id: string): Tree.Node | undefined;
