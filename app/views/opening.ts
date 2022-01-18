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
    tags.section({ class: 'knowledge' }, [
      tags.h1(['Opening Knowledge']),
      mine.length === 0 ? tags.p(['Add lichess studies to get started.']): '',
      bits_openings(mine),
      tags.div({ class:'controls' }, [
        tags.input({ id:'send-mine', type:'text', placeholder:'add lichess study link',  size: 80})
      ]),
    ]),
    tags.section({ class:'featured' }, [
      tags.h2(['Featured studies']),
      bits_openings(featured),
      ctx.isAdmin ? 
      tags.div({ class:'controls' }, [
        tags.input({ id:'send-featured', type:'text', placeholder:'[chesteditor] add featured studies' })
      ]) :
      tags.p(['See ',
        tags.a({ href: '#about' }, ['about']),
        ' for featured studies.'
      ])
    ]),
    tags.section({ class: 'about', id: 'about' }, [
      tags.h2('About'),
      tags.p([tags.frag(['There is a lichess bot (', 
        tags.a({ href: 'https://lichess.org/@/openingsexercise', target: '_blank' }, ['@openingsexercise']),
        ') that plays lines from a lichess study. Study opening lines with the bot, and you can see your statistics on this site.']),
      ]),
      tags.ul([
        tags.li(['Pickup an opening book and make a lichess study of important lines.']),
        tags.li([tags.a({ href: '/auth' }, ['Login this site via lichess.'])]),
        tags.li(['Paste the study link into the form above. It will import the study into this site.']),
        tags.li(['Challenge the bot and paste the chapter link to game chat in lichess.']),
        tags.li(['Play as many games as you like by offering a rematch. Make sure to play both as white and black.']),
        tags.li(['Come back to this website and click Refresh Games to analyze your recently played games with the bot.']),
        tags.li([
          tags.p(['See your progress for each opening move. For each move, statistics is number of (The move made / The position reached) ']),
          tags.p(['Bot will pick a variation randomly, so play more games to cover every variation. Try to keep your stats at green by reaching the positions close to 10 times.'])
        ]),
        tags.li(['Consider sharing your studies with fellow friends or',
          tags.a({ href: 'https://lichess.org/@/chesteditor', target: '_blank' }, ['@chesteditor']),
          'to feature them on this site.']),
      ]),
      tags.p(['This project is currently under development, openings may be deleted or crash. Please consider giving feedback by messaging',
        tags.a({ href: 'https://lichess.org/@/chesteditor', target: '_blank' }, ['@chesteditor']),
        'on lichess.']),

      tags.p(['This project is open source at ',
        tags.a({ target: '_blank', href: 'https://github.com/eguneys/aid' }, ['https://github.com/eguneys/aid'])]),
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
