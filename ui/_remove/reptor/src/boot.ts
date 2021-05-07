import main from './main';

export function boot(opts: any) {

  const $_ = document.querySelector('.reptor__all') as HTMLElement;
  main($_, opts);
  
}
