export type Left<A> = {
  left: A
};

export type Right<A> = {
  right: A
};

export type Either<A, B> = Left<A> | Right<B>

export function left<A, B>(a: A): Either<A, B> {
  return { left: a };
};

export function right<A, B>(b: B): Either<A, B> {
  return { right: b };
};


export function isRight<A, B>(e: Either<A, B>): e is Right<B> {
  return ((e as Right<B>).right !== undefined);
}

export function isLeft<A, B>(e: Either<A, B>): e is Left<A> {
  return ((e as Left<A>).left !== undefined);
}

export function fold<A, B>(e: Either<A, B>, fl: (_: A) => void,
                     fr: (_: B) => void) {
  if (isLeft(e)) {
    fl(e.left);
  } else {
    fr(e.right);
  }
}
