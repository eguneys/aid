type Sri = string;
type Tpe = string;
type Version = number;
type Payload = any;

interface MsgBase {
  t: Tpe;
  d?: Payload;
}

interface MsgIn extends MsgBase {
  v?: Version;
}

interface MsgOut extends MsgBase {}
interface MsgAck extends MsgOut {
  at: number;
}
type Send = (t: Tpe, d: Payload, o?: any) => void;
