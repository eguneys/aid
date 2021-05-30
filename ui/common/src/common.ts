export const defined = <A>(v: A | undefined): v is A => typeof v !== 'undefined';


export interface Prop<T> {
  (): T;
  (v: T): T;
}

export const prop = <A>(initialValue: A): Prop<A> => {
  let value = initialValue;
  const res = function(v: A | undefined) {
    if (defined(v)) value = v;
    return value;
  }
  return res as Prop<A>;
};
