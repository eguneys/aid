import tags from '../tags';

const doctype = tags.raw('<!DOCTYPE html>');
const htmlTag = tags.html();

export function layout(title: string, body: any, {}) {
  return tags.frag([
    doctype,
    htmlTag({}, [
      tags.head([
        tags.headTitle(`${title} • chessishard.com`)
      ]),
      tags.body([
      ])
    ])
  ]);
};
