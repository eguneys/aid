import express from 'express';
import multer from 'multer';
import wireCtrls from './wireCtrls';
let upload = multer();

export default function routes(c: wireCtrls) {
  const router = express.Router();

  router.get('/auth', c.auth.login);
  router.get('/auth/lila', c.auth.lila);
  router.get('/lila/callback', c.auth.lilaCallback);
  router.get('/logout', c.auth.logout);
  // dev only
  //router.get('/auth/guest', c.auth.guest);

  
  router.get('/', c.opening.home)

  router.post('/opening/addf', upload.none(), c.opening.addf)
  router.post('/opening/add', upload.none(), c.opening.add)
  router.get('/opening/:id', c.opening.show)
 
  router.use(c.site.notFound.bind(c.site));

  router.use((err: any, req: any, res: any, next: any) => {
    console.warn(err);
    res.status(500).send(err.message);
  });

  return router;  
}
