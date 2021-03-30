import * as html from './views';

export default function notFound(req: any, res: any, next: any) {
  if (!req.route) {
    res.status(404).send(html.base.notFound());
  } else {
    next();
  }
}
