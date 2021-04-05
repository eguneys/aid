let redirectInProgress: false | string = false;


export const redirect = obj => {
  let url;
  if (typeof obj === 'string') url = obj;
  else {
    url = obj.url;
  }
  const href = '//' + location.host + '/' + url.replace(/^\//, '');
  redirectInProgress = href;
  location.href = href;
};

export const reload = () => {
  if (redirectInProgress) return;
  location.href = location.href;
};
