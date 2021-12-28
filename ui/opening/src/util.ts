import type { VNode, Hooks, Attrs } from 'snabbdom'



export function onInsert<A extends HTMLElement>(f: (element: A) => void): Hooks {
  return {
    insert: vnode => f(vnode.elm as A),
  };
}



export function bind(eventName: string, f: (e: Event) => any, redraw?: () => void, passive = true): Hooks {
  return onInsert(el =>
    el.addEventListener(
      eventName,
      e => {
        const res = f(e);
        if (res === false) e.preventDefault();
        redraw?.();
        return res;
      },
      { passive }
    )
  );
}
