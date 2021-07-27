import GameProxy from './gameproxy';

export default class RoundActor {

  constructor(readonly proxy: GameProxy) {
  }

  get getGame() {
    return this.proxy.game;
  }
  
}
