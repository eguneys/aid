import { Env } from '../env';
import { Context } from '../../modules/api';
import { UserContext } from '../../modules/user';

export default class ChestCtrl {
  env: Env

  constructor(env: Env) {
    this.env = env;
  }

  async reqToCtx(req: any) {
    return { };
  }
}
