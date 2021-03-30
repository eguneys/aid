export type LichessId = string
export type UserId = string

export interface User {
  id: UserId,
  username: string,
  lichessId: LichessId
}
