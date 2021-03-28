import { nt } from 'nefs';
import { DropGame, SameDropGame, OneDropGame, NoDropGame } from './drop';
import { DestDropGame } from './dest';
import PathDropGame from './path';
import { Api as FxApi } from 'ssehfx';
import { ck, db as ckdb, route } from 'caykahve';

export class MultiDropGame extends DropGame {

  dropGames: Array<DropGame>
  selected: number

  constructor() {
    super();
    this.dropGames = [
      new NoDropGame()
    ]
    this.selected = 0;
  }

  setFxApi(fxApi: FxApi) {
    this.dropGames = this.dropGames
      .concat([new OneDropGame(fxApi),
               new SameDropGame(fxApi),
               new DestDropGame(fxApi),
               new PathDropGame(fxApi)]);

    this.selected = this.dropGames.length - 1;
  }

  impl<A>(fn: (_: DropGame) => A): A {
    return fn(this.dropGames[this.selected]);
  }


  onPickup(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {
    this.impl((_: DropGame) => _.onPickup(situation, pos, piece));
  }


  onDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {
    this.impl((_: DropGame) => _.onDrop(situation, pos, piece))
  }

  canDrop(situation: nt.Situation, pos: nt.Pos, piece: nt.Piece) {
    return this.impl((_: DropGame) => _.canDrop(situation, pos, piece))
  }  
  
}
