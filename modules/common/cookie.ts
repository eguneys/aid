export function withSessionId(res: any, sessionId: string) {
  return res.cookie('sessionId', sessionId, {
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
}
