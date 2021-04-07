import main from './main';

export function boot(data: any) {

  const $_ = document.querySelector('.tencon__app') as Element;
  main($_, data);
  
}
