import main from './main';
import { RotideData, RotideOpts } from './types';

export function boot(opts: RotideOpts) {

  let $_ = document.querySelector('.rotide') as HTMLElement,
  data: RotideData = opts.data;

  main($_, opts);
  
}
