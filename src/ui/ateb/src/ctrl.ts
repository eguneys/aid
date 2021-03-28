import { nt } from 'nefs';
import { Api as FxApi } from 'ssehfx';
import { MultiDropGame } from './drop';

export default class Ctrl {

  onDrop: any
  canDrop: any
  onPickup: any
  mdg: MultiDropGame
  
  constructor() {
    this.mdg = new MultiDropGame();
    this.onPickup = this.mdg.onPickup.bind(this.mdg);
    this.onDrop = this.mdg.onDrop.bind(this.mdg);
    this.canDrop = this.mdg.canDrop.bind(this.mdg);
  }

  setFxApi(fxApi: FxApi) {
    this.mdg.setFxApi(fxApi);
  }
  
}
