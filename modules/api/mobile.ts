import { request } from '../common';

export function requestVersion(req: any) {
  return request.apiVersion(req);
}
