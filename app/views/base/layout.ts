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

const favicons = tags.raw(`
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
`);

const dasher = (me: User) =>
  tags.div({ cls: 'dasher' }, [
    tags.a({ id: 'user_tag', href: '/logout' }, [me.username])
  ])

const guestDasher = () =>
  tags.div({ cls: 'dasher' }, [
    tags.a({ id: 'user_tag', href: '/logout' }, ['Guest'])
  ]);

const anonDasher = () => `
<a href="/auth" class="signin">Sign In</a>
`.trim();

const dataSocketDomains = 'data-socket-domains';


const pieceSprite = () => tags.linkt({ id: 'piece-sprite',
  href: h.assetUrl('piece-css/cburnett.css'),
  rel: 'stylesheet'})

export function layout(title: string, body: string[], params: LayoutParams) {

  let { moreJs, moreCss } = params;

  return (ctx: Context) =>
    tags.frag([
      doctype,
      htmlTag({}, [
        tags.head([
          tags.headTitle(h.env.netConfig.isProd?
            `${title} • aidchess.com`:
            `${title} • aidchess.dev`),
          h.cssTag('site'),
          moreCss,
          pieceSprite(),
          favicons
        ]),
        tags.body({ cls: ['pink'],
                    [dataSocketDomains]: h.env.netConfig.socketDomains.join(',')
                  }, [
          siteHeader(ctx),
          tags.div({
            id: 'main-wrap',
            cls: ['is2d']
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
      linkTitle('/', tags.frag([tags.span({ cls: 'home'}, ['Home']),
                                tags.span({ cls: 'domain'}, ['aidchess.com'])]))
    ),
   //  tags.section(
   //   linkTitle('/matchmaker', tags.frag([tags.span({ cls: 'matchmaker'}, ['Eslestirme'])]))
   //  )
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
        tags.a({ href: '/' }, ['aidchess']),
        tags.span(`${h.env.netConfig.isProd?'.com':'.dev'}`)
      ]),
      topnav()
    ]),
    tags.div({ cls: 'site-buttons' }, [
      ctx.me?dasher(ctx.me):ctx.sessionOrUserId?guestDasher():anonDasher()
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
