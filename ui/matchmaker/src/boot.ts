import { MatchmakerOptions } from './interfaces';
import { MatchmakerData } from 'shared_options';
import { MatchmakerApi, app } from './main';

export function boot(opts: Partial<MatchmakerOptions>) {

  let matchmaker: MatchmakerApi;
  const element = document.querySelector('.matchmaker__app') as HTMLElement,
  data: MatchmakerData = opts.data as MatchmakerData;

  opts.element = element;


  chest.socket = new chest.StrongSocket('/matchmaker/csgo/socket/v5', 0, {
    receive(t: string, d: any) {
      matchmaker.socketReceive(t, d);
    },
    events: {
      redirect(e: RedirectTo) {
        matchmaker.leavePool();
        matchmaker.setRedirecting();
        chest.redirect(e);
      }
    }
  });
  
  opts.socketSend = chest.socket.send;
  matchmaker = app(opts as MatchmakerOptions);
  
}
