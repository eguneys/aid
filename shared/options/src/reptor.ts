import { kbm } from 'koobm';

export type ReptorOptions = {
  data: ReptorData
}

export type ReptorData = {
  books: Array<kbm.BookM>
}
