import { Env } from '../../env';

class EnvWrap {

  env!: Env

  get netConfig() {
    return this.env.net;
  }
  
  setEnv(env: Env) {
    this.env = env;
  }
  
}

const _ = new EnvWrap;

export default _;
