interface Chest {
  load: Promise<void>;
  redirect(o: RedirectTo): void;
  reload(): void;
  socket: any;
  StrongSocket: {
    new (url: string, version: number, cfg?: any): any;
  }
}

type RedirectTo = string | { url: string, cookie: Cookie };

type Redraw = () => void;

interface Cookie {
  name: string;
  value: string;
  maxAge: number;
}

type Timeout = ReturnType<typeof setTimeout>;

interface Dictionary<T> {
  [key: string]: T | undefined;
}

type SocketHandlers = Dictionary<(d: any) => void>;

declare var chest: Chest;
