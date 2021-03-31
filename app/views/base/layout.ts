import tags from '../tags';
import * as h from '../helper';
import { Context } from '../../../modules/api';

const doctype = tags.raw('<!DOCTYPE html>');
const htmlTag = tags.html();

export type LayoutParams = {
  moreJs?: string,
  moreCss?: string
}

const pieceSprite = () => 
  tags.linkt({ id: 'piece-sprite', href: h.assetUrl('piece-css/cburnett.css'), rel: 'stylesheet'});

export function layout(title: string, body: string[], params: LayoutParams) {

  let { moreJs, moreCss } = params;

  return (ctx: Context) =>
    tags.frag([
      doctype,
      htmlTag({}, [
        tags.head([
          tags.headTitle(`${title} • chessishard.com`),
          h.cssTag('site'),
          moreCss,
          pieceSprite()
        ]),
        tags.body({ cls: [], }, [
          siteHeader(),
          tags.div({
            id: 'main-wrap',
            cls: []
          }, body)
        ]),
        loadScripts(moreJs, ctx)
      ])
    ]);
};

function siteHeader() {
  return tags.header({ id: 'top' }, [
    tags.div({ cls: 'site-title-nav' }, [
      tags.h1({ cls: 'site-title' }, [
        tags.a({ href: '/' }, ['Chess Is Hard'])
      ])
    ])
  ]);
}

function chestJsObject(ctx: Context) {
  return h.embedJsUnsafe(`chest={load:new Promise(r=>{window.onload=r})}`)(ctx);
}

function loadScripts(moreJs: Maybe<string>, ctx: Context) {
  return tags.frag([
    chestJsObject(ctx),
    h.jsModule('site'),
    moreJs || ''
  ]);
}
