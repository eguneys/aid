import Env from '../../env';

class EnvWrap {

  env!: Env
  
  setEnv(env: Env) {
    this.env = env;
  }
}

const _ = new EnvWrap;

export default _;
