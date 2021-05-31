import { h, Hooks } from 'snabbdom';

export function onInsert<A extends HTMLElement>(f: (el: A) => void): Hooks {
  return {
    insert: vnode => f(vnode.elm as A)
  }
};

export const bind = (eventName: string, f: (e: Event) => void | Promise<void>, redraw?: Redraw, passive: boolean = false): Hooks =>
  onInsert(el => {
    el.addEventListener(
      eventName,
      e => {
        Promise.resolve(f(e)).then(() => {
          redraw && redraw();
        });
      }, { passive });
  });

export function bindSubmit(f: (e: Event) => any, redraw?: () => void): Hooks {
  return bind(
    'submit',
    e => {
      e.preventDefault();
      return f(e);
    }, redraw);
}

export function option(value: string, current: string | undefined, name: string) {
  return h('option', {
    attrs: {
      value: value,
      selected: value === current
    }
  }, name);
}
