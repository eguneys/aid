import { UserId } from '../user/user';
import { SocketSri } from '../socket/socket';

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
