import tags from './tags';
import * as html from './';
import * as h from './helper';
import { Context } from '../../modules/api';
import Opening from '../../modules/opening/opening'

function bits_openings(openings: Array<Opening>) {

  return tags.ul({ class:"openings" },openings.map(_ => tags.li([
    tags.a({ href: `opening/${_.id}`}, [tags.h1([_.name])]),
  ])))
}


export const home = (mine: Array<Opening>, featured: Array<Opening>) => (ctx: Context) => html.base.layout("Opening Knowledge", [
  tags.main({ class: 'opening box box-padding' }, [
    tags.h1(['Opening Knowledge']),
    tags.p(['Add lichess studies to get started.']),
    bits_openings(mine),
    tags.div({ class:'controls' }, [
      tags.input({ id:'send-mine', type:'text', placeholder:'add lichess study link' })
    ]),
    tags.section({ class:'featured' }, [
      tags.h2(['Featured studies']),
      bits_openings(featured),
      ctx.isAdmin ? 
      tags.div({ class:'controls' }, [
        tags.input({ id:'send-featured', type:'text', placeholder:'[chesteditor] add featured studies' })
      ]) :
      tags.p(['See ',
        tags.a({ href: 'about' }, ['about']),
        ' to see featured studies.'
      ])
    ])
  ])
], {
  moreCss: tags.frag([
    h.cssTag('opening')
  ]),
  moreJs: tags.frag([
    h.openingTag(),
    h.embedJsUnsafeLoadThen(`
    Opening.boot()
    `)(ctx)
  ])
})(ctx);
