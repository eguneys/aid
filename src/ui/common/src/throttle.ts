export default function throttle(delay: number, cb: (...args: any[]) => void): (...args: any[]) => void {
  
  let timer: number | undefined,
  lastExec = 0;

  return function(this: any, ...args: any[]): void {
    const self: any = this;
    const elapsed = performance.now() - lastExec;
    function exec() {
      timer = undefined;
      lastExec = performance.now();
      cb.apply(self, args);
    }

    if (timer) clearTimeout(timer);

    if (elapsed > delay) exec();
    else timer = window.setTimeout(exec, delay - elapsed);
  }

}
