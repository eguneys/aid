import tags from './tags';
import * as html from './';
import * as h from './helper';
import { Context } from '../../modules/api';

function bits_studies(studies: Array<any>) {

  return tags.ul({ class:"studies" }, studies.map(_ => tags.li([
    tags.a([tags.h1(['The Classical Slav'])]),
    tags.p(['Chapter 1'])
  ])))
}


export const home = (mine: Array<any>, featured: Array<any>) => (ctx: Context) => html.base.layout("Opening Knowledge", [
  tags.main({ class: 'opening box box-padding' }, [
    tags.h1(['Opening Knowledge']),
    tags.p(['Add lichess studies to get started.']),
    bits_studies(mine),
    tags.div({ class:'controls' }, [
      tags.input({ id:'send-mine', type:'text', placeholder:'add lichess study link' })
    ]),
    tags.section({ class:'featured' }, [
      tags.h2(['Featured studies']),
      bits_studies(featured),
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
