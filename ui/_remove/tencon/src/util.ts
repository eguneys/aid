import { Hooks } from 'snabbdom';

export const onInsert = (f: (el: HTMLElement) => void): Hooks => ({
  insert(vnode) {
    f(vnode.elm as HTMLElement);
  }
});

export const bind = (eventName: string, f: (e: Event) => void | Promise<void>, redraw?: Redraw, passive: boolean = true): Hooks =>
  onInsert(el => {
    el.addEventListener(
      eventName,
      e => {
        Promise.resolve(f(e)).then(() => {
          redraw && redraw();
        });
      }, { passive });
  });
