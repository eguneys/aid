import express from 'express';
import multer from 'multer';
import wireCtrls from './wireCtrls';
let upload = multer();

export default function routes(c: wireCtrls) {
  const router = express.Router();

  router.get('/auth', c.auth.login.bind(c.auth));
  router.get('/auth/guest', c.auth.guest.bind(c.auth));
  router.get('/auth/lichess', c.auth.lichess.bind(c.auth));
  router.get('/callback', c.auth.callback.bind(c.auth));
  router.get('/logout', c.auth.logout.bind(c.auth));

  router.get('/study', c.study.list.bind(c.study));
  router.get('/study/all', c.study.list.bind(c.study));
  router.get('/study/mine', c.study.mine.bind(c.study));
  router.post('/study', upload.none(), c.study.create.bind(c.study));
  router.get('/study/:id', c.study.show.bind(c.study));

  router.use(c.site.notFound.bind(c.site));

  router.use((err: any, req: any, res: any, next: any) => {
    console.warn(err);
    res.status(500).send(err.message);
  });

  return router;  
}
