import { redirect, reload } from './component/reload';

export default function () {

  const c = window.chest;

  c.redirect = redirect;
  c.reload = reload;
    
}
