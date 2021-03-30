import express from 'express';
import wireCtrls from './wireCtrls';

export default function routes(c: wireCtrls) {
  const router = express.Router();

  router.get('/editor', c.site.editor.bind(c.site));
  router.get('/book', c.book.all.bind(c.book));

  router.use(c.site.notFound.bind(c.site));

  router.use((err: any, req: any, res: any, next: any) => {
    res.status(500).send(err.message);
  });

  return router;  
}
