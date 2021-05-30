export declare const defined: <A>(v: A | undefined) => v is A;
export interface Prop<T> {
    (): T;
    (v: T): T;
}
export declare const prop: <A>(initialValue: A) => Prop<A>;
