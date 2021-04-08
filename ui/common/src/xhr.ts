const jsonHeader = {
  Accept: 'application/vnd.chest.v1+json'
};

export const defaultInit: RequestInit = {
  cache: 'no-cache',
  credentials: 'same-origin'
};

export const xhrHeader = {
  'X-Requested-With': 'XMLHttpRequest'
};

export const json = (url: string, init: RequestInit = {}): Promise<any> =>
  fetch(url, {
    ...defaultInit,
    headers: {
      ...jsonHeader,
      ...xhrHeader
    },
    ...init
  }).then(res => {
    if (res.ok) return res.json();
    throw res.json().then(_ => {
      if (_.redirect) {
        chest.redirect(_.redirect);
      }
      return _;
    });
  });
        

export const form = (data: any): FormData => {
  const formData = new FormData();
  for (const k of Object.keys(data)) formData.append(k, data[k]);
  return formData;
}
