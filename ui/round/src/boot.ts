import { RoundOptions } from './interfaces';
import { RoundData } from 'shared_options';
import { RoundApi, app } from './main';


export function boot(opts: Partial<RoundOptions>) {


  let round: RoundApi;
  const element = document.querySelector('.round__app') as HTMLElement,
  data: RoundData = opts.data as RoundData;

  opts.element = element;

  round = app(opts as RoundOptions);

}
