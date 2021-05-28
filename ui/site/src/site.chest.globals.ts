import StrongSocket from './component/socket';
import { redirect, reload } from './component/reload';

export default function () {

  const c = window.chest;
  c.StrongSocket = StrongSocket;
  c.redirect = redirect;
  c.reload = reload;
    
}
