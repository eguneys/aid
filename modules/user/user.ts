import { kbu } from 'koob';
import { LiAuth } from '../lila/auth';

export type LiUser = {
  userId: kbu.UserId,
  auth: LiAuth
}
