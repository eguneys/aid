import tags from '../tags';
import * as h from '../helper';
import { Context } from '../../../modules/api';
import User from '../../../modules/user/user';

const doctype = tags.raw('<!DOCTYPE html>');
const htmlTag = tags.html();

export type LayoutParams = {
  moreJs?: string,
  moreCss?: string
}

const pieceSprite = () => 
  tags.linkt({ id: 'piece-sprite', href: h.assetUrl('piece-css/cburnett.css'), rel: 'stylesheet'});

const dasher = (me: User) =>
  tags.div({ cls: 'dasher' }, [
    tags.a({ id: 'user_tag', href: '/logout' }, [me.username])
  ])

const guestDasher = () =>
  tags.div({ cls: 'dasher' }, [
    tags.a({ id: 'user_tag', href: '/logout' }, ['Guest'])
  ]);

const anonDasher = () => `
<a href="/auth" class="signin button button-empty">Sign In</a>
`.trim();

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
          siteHeader(ctx),
          tags.div({
            id: 'main-wrap',
            cls: []
          }, body)
        ]),
        loadScripts(moreJs, ctx)
      ])
    ]);
};

function linkTitle(url: string, name: string) {
  return tags.a({ href: url }, [name]);
}

function topnav() {
  return tags.nav({ id: 'topnav', cls: 'hover' }, [
    tags.section(
      linkTitle('/', tags.frag([tags.span({ cls: 'home'}, ['home']),
                                tags.span({ cls: 'domain'}, ['chessishard.com'])]))
    ),
    tags.section(
      linkTitle('/study', tags.frag([tags.span({ cls: 'study'}, ['study'])]))
    )
  ]);
}

const topnavToggle = `
<input type="checkbox" id="tn-tg" class="topnav-toggle" autocomplete="off">
<label for="tn-tg" class="hbg"><span class="hbg__in"></span></label>
`.trim();

function siteHeader(ctx: Context) {
  return tags.header({ id: 'top' }, [
    tags.div({ cls: 'site-title-nav' }, [
      topnavToggle,
      tags.h1({ cls: 'site-title' }, [
        tags.a({ href: '/' }, ['Chess Is Hard'])
      ]),
      topnav()
    ]),
    tags.div({ cls: 'site-buttons' }, [
      ctx.me?dasher(ctx.me):ctx.sessionId?guestDasher():anonDasher()
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
