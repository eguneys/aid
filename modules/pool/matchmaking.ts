import { PoolMember } from './poolmember';

export class Couple {

  static make = (a: Array<PoolMember>,
                 b: Array<PoolMember>) => new Couple(a, b);
  
  constructor(readonly a: Array<PoolMember>,
              readonly b: Array<PoolMember>) {
  }

  get members() {
    return this.a.concat(this.b);
  }

  get userIds() {
    return this.members.map(_ => _.userId);
  }
  
}

export function MatchMaking(members: Array<PoolMember>, n: number): Array<Couple> {

  return naive(members, n);
  
}


export function naive(members: Array<PoolMember>, n: number): Array<Couple> {

  let n2 = n * 2;

  let res = [];
  let sorted = members.sort((a, b) => a.rating - b.rating)

  for (let i = 0; i < sorted.length; i+=n2) {
    let a = sorted.slice(i, i+n),
    b = sorted.slice(i+n, i+n2);

    if (a.length === n && b.length === n) {
      res.push(Couple.make(a, b));
    }
  }

  return res;
  
}
