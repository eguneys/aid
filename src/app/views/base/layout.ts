import tags from '../tags';
import * as h from '../helper';

const doctype = tags.raw('<!DOCTYPE html>');
const htmlTag = tags.html();

export function layout(title: string, body: string[], {}) {
  return tags.frag([
    doctype,
    htmlTag({}, [
      tags.head([
        tags.headTitle(`${title} • chessishard.com`),
        h.cssTag('site')
      ]),
      tags.body({ cls: [], }, [
        tags.div({
          id: 'main-wrap',
          cls: []
        }, body)
      ])
    ])
  ]);
};
