type Maybe<A> = A | undefined

type Fu<A> = Promise<A>
type Funit = Fu<void>

declare type Ply = number;
declare type Fen = string;
declare type San = string;
declare type Uci = string;

declare namespace Tree {
  export type Path = string;

  export interface Node {
    id: string;
    ply: Ply;
    uci?: Uci;
    fen: Fen;
    children: Node[];
  }
}
