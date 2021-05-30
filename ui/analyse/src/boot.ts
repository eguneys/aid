import { AnalyseOptionsPlus } from './interfaces';
import { AnalyseOptions, AnalyseData } from 'shared_options';
import main from './main';

export function start(opts: AnalyseOptions) {
  let $_ = document.querySelector('.analyse') as HTMLElement,
  data: AnalyseData = opts.data;

  chest.socket = new chest.StrongSocket(opts.socketUrl, opts.socketVersion, {
    receive(t: string, d: any) {
      analyse.socketReceive(t, d);
    }
  });
  
  let optsPlus: any = {
    ...opts
  };

  optsPlus.socketSend = chest.socket.send;
  
  const analyse = main($_, optsPlus as AnalyseOptionsPlus);
}
