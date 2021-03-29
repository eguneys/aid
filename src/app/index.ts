import path from 'path';
import express from 'express';
import routes from './routes';
import Env from './env';
import { env as helperEnv } from './views/helper';

export async function withApp(cb: (_: express.Application, __: () => void) => void) {

  const app = express();
  const env = new Env(app);

  helperEnv.setEnv(env);
  
  await env.awaitVariables().then(() => {

    app.use('/assets', express.static(path.join(__dirname, '../public')));

    let router = routes();

    app.use(router);

    cb(app, () => {});
  });

}
