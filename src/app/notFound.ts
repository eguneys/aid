import * as html from './views';

export default function notFound(req: any, res: any, next: any) {
  if (!req.route) {
    res.send(html.base.notFound());
  } else {
    next();
  }
}
