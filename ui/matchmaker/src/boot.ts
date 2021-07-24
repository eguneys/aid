import { MatchmakerOptions } from './interfaces';
import { MatchmakerData } from 'shared_options';
import { MatchmakerApi, app } from './main';
import { numberFormat } from 'common/number';

export function boot(opts: Partial<MatchmakerOptions>) {

  let matchmaker: MatchmakerApi;
  const element = document.querySelector('.matchmaker__app') as HTMLElement,
  data: MatchmakerData = opts.data as MatchmakerData;

  opts.element = element;


  const nbPoolSpread = spreadNumber((nb: number) => matchmaker.poolSpread(nb), 8);

  chest.socket = new chest.StrongSocket('/matchmaker/csgo/socket/v5', 0, {
    receive(t: string, d: any) {
      matchmaker.socketReceive(t, d);
    },
    events: {
      n(_: string, msg: any) {
        nbPoolSpread(msg.d);
      },
      redirect(e: RedirectTo) {
        matchmaker.leavePool();
        matchmaker.setRedirecting();
        chest.redirect(e);
      }
    }
  });
  
  opts.socketSend = chest.socket.send;
  matchmaker = app(opts as MatchmakerOptions);



  function spreadNumber(displayFn: any, nbSteps: number) {
    const display = (prev: number, cur: number, it: number) => {
      let res = numberFormat(Math.round((prev * (nbSteps - 1 - it) + cur * (it + 1)) / nbSteps));

      displayFn(res);
    };
    let previous = 0;
    let timeouts: number[] = [];
    return (nb: number, overrideNbSteps?: number) => {
      if ((!nb && nb !== 0)) return;
      if (overrideNbSteps) nbSteps = Math.abs(overrideNbSteps);
      timeouts.forEach(clearTimeout);
      timeouts = [];
      const interv = Math.abs(chest.socket.pingInterval() / nbSteps);
      const prev = previous || nb;
      previous = nb;
      for (let i = 0; i < nbSteps; i++) timeouts.push(setTimeout(() => display(prev, nb, i), Math.round(i * interv)));
    };
  };
  
}
