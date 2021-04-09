import { kbu } from 'koob';
import { LiAuth } from '../lila/auth';

export type LiUser = {
  id: kbu.UserId,
  userId: kbu.UserId,
  auth: LiAuth
}
