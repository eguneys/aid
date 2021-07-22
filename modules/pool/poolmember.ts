import { UserId } from '../user/user';
import { SocketSri } from '../socket/socket';
import { Joiner } from './poolapi';
import { PoolConfig } from './poolconfig';

export type RatingRange = 'TODO implement me';

export class PoolMember {

  static make = (userId: UserId,
                 sri: SocketSri,
                 rating: number,
                 ratingRange: Maybe<RatingRange>) =>
    new PoolMember(userId,
                   sri,
                   rating,
                   ratingRange)

  static makeWithJoin = (joiner: Joiner,
                         config: PoolConfig) =>
    new PoolMember(joiner.userId,
                   joiner.sri,
                   joiner.rating,
                   undefined)
                   

  constructor(
    readonly userId: UserId,
    readonly sri: SocketSri,
    readonly rating: number,
    readonly ratingRange: Maybe<RatingRange>,
    readonly misses: number = 0) {
  }

  
  get incMisses() {
    return new PoolMember(this.userId,
                          this.sri,
                          this.rating,
                          this.ratingRange,
                          this.misses + 1)
  }

  ratingDiff(other: PoolMember) {
    return Math.abs(this.rating - other.rating)
  }

  

}
