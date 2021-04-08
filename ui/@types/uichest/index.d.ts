interface Chest {
  load: Promise<void> 
  redirect(o: RedirectTo): void;
  reload(): void;
}

type RedirectTo = string | { url: string, cookie: Cookie };

type Redraw = () => void;

interface Cookie {
  name: string;
  value: string;
  maxAge: number;
}

declare var chest: Chest;
