interface Chest {
  redirect(o: RedirectTo): void;
  reload(): void;
}

type RedirectTo = string | { url: string, cookie: Cookie };

interface Cookie {
  name: string;
  value: string;
  maxAge: number;
}

declare var chest: Chest;
