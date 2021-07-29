export class GameFullId {

  constructor(readonly value: string) {
    
  }

  get gameId(): string {
    return this.value.substring(0, 8);
  }

  get teamId(): string {
    return this.value.substring(8, 16);
  }
  
}
