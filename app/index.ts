import path from 'path';
import express from 'express';
import routes from './routes';
import EnvBoot from './env';
import Configuration from './config';
import wireCtrls from './wireCtrls';

import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';

export async function withApp(cb: (_: express.Application, __: (server: any) => void) => void) {

  const app = express();
  const config = new Configuration(app.get('env'));

  let boot = new EnvBoot(config);

  boot.awaitVariables().then(() => {

    let ctrls = new wireCtrls(boot);
    let router = routes(ctrls);

    let { config: { cookie_secret } } = boot.envAwait.config;

    app.use('/assets', express.static(path.join(__dirname, '../../public')));
    app.use(cookieParser());
    app.use(cookieSession({
      name: 'rk2',
      secret: cookie_secret,
      signed: false,
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    }));
    
    app.use(router);
    cb(app, server => {

      boot.env.socket.webClient.initServer(server);
      
    });

    console.log(`Domain: ${config.net.domain}`);
  }).catch(e => {
    console.log(`[Failed boot] `, e);
    process.exit(1);
  });

}
