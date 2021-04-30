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


  router.use(c.site.notFound.bind(c.site));

  router.use((err: any, req: any, res: any, next: any) => {
    res.status(500).send(err.message);
  });

  return router;  
}
