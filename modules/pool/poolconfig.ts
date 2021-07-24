export class PoolConfig {

  static make = (id: PoolConfigId,
                 n: number,
                 every: number,
                 players: number) => new PoolConfig(id, n, every, players)
  
  constructor(
    readonly id: PoolConfigId,
    readonly n: number,
    readonly every: number,
    readonly players: number) {
  }
  
}

export type PoolConfigId = string



export class PoolList {

  static all: Array<PoolConfig> = [
    PoolConfig.make('single', 1, 10, 10)
  ]
  
}
