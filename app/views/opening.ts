import tags from './tags';
import * as html from './';
import * as h from './helper';
import { Context } from '../../modules/api';
import Opening, { OpeningWithChapters } from '../../modules/opening/opening'

function bits_openings(openings: Array<Opening>) {

  return tags.ul({ class:"openings" },openings.map(_ => tags.li([
    tags.a({ href: `opening/${_.id}`}, [tags.h1([_.name])]),
  ])))
}


export const show = ([opening, chapters]: OpeningWithChapters) => (ctx: Context) => html.base.layout(opening.name, [
  tags.main({ class: 'opening' }, [ ])
], {
  moreCss: tags.frag([
    h.cssTag('opening.show')
  ]),
  moreJs: tags.frag([
    h.openingTag(),
    h.embedJsUnsafeLoadThen(`
    Opening.boot({
      opening:${h.safeJsonValue(opening)},
      chapters:${h.safeJsonValue(chapters)}
    })`)(ctx)
  ])
})(ctx)

export const home = (mine: Array<Opening>, featured: Array<Opening>) => (ctx: Context) => html.base.layout("Opening Knowledge", [
  tags.main({ class: 'opening box box-pad' }, [
    tags.h1(['Opening Knowledge']),
    mine.length === 0 ? tags.p(['Add lichess studies to get started.']): '',
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
    Opening.boot_home()
    `)(ctx)
  ])
})(ctx);
