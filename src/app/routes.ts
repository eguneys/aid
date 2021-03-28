import express from 'express';
import notFound from './notFound';

export default function routes() {
  const router = express.Router();

  router.use(notFound);

  router.use((err: any, req: any, res: any, next: any) => {
    res.status(500).send(err.message);
  });

  return router;  
}
