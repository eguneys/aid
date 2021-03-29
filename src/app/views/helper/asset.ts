import e from './env';
import tags from '../tags';

let assetBaseUrl = () => e.env.assetBaseUrl;

function assetUrl(path: string) {
  return `${assetBaseUrl()}/assets/${path}`;
}

function cssAt(path: string) {
  return tags.link(assetUrl(path));
}

export const cssTag = (name: string) =>
  cssAt(`css/${name}.css`);
