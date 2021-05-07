export const fuccess = <A>(_: A): Fu<A> => Promise.resolve(_);
export const fufail = <A>(err: Error): Fu<A> => Promise.reject(err);
export const funit = fuccess<void>(void 0);
export const fuTrue = fuccess(true);
export const fuFalse = fuccess(false);
