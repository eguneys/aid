export function isXhr(req: any) {
  return req.header('X-Requested-With').includes('XMLHttpRequest');
}


export function apiVersion(req: any) {
  const ApiVersionHeaderRegex = /application\/vnd\.chest\.v(\d+)\+json/;
  
  let accept = req.header('Accept');

  let m = accept.match(ApiVersionHeaderRegex);

  if (m) {
    return parseInt(m[1]);
  }  
}
