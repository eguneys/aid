import tags from '../tags';

export const postForm = (opts: any, children: Array<string>) =>
  tags.form({ ...opts, enctype:'multipart/form-data', method: 'post' }, children);
export const submitButton = (opts: any, children: Array<string>) =>
  tags.button({ ...opts, tpe: 'submit' }, children);
