import express from 'express';
import multer from 'multer';
import wireCtrls from './wireCtrls';
let upload = multer();

export default function routes(c: wireCtrls) {
  const router = express.Router();

  router.get('/auth', c.auth.login);
  router.get('/auth/steam', c.auth.steam);
  router.get('/steam/callback', c.auth.steamCallback);
  router.get('/logout', c.auth.logout);
  // dev only
  router.get('/auth/guest', c.auth.guest);

  router.get('/matchmaker', c.matchmaker.list)
  router.get('/matchmaker/csgo', c.matchmaker.showCsGo)
  
  router.use(c.site.notFound.bind(c.site));

  router.use((err: any, req: any, res: any, next: any) => {
    console.warn(err);
    res.status(500).send(err.message);
  });

  return router;  
}
