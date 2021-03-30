import path from 'path';
import express from 'express';
import routes from './routes';
import EnvBoot from './env';
import Configuration from './config';
import wireCtrls from './wireCtrls';

export async function withApp(cb: (_: express.Application, __: () => void) => void) {

  const app = express();
  const config = new Configuration(app.get('env'));

  let boot = new EnvBoot(config);

  boot.awaitVariables().then(() => {

    let ctrls = new wireCtrls(boot);
    let router = routes(ctrls);

    app.use('/assets', express.static(path.join(__dirname, '../../public')));
    app.use(router);
    cb(app, () => {});
  });

}
