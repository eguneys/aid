import tags from '../tags';
import { layout } from './layout';
import { Context } from '../../modules/api';

export const notFound = () => (ctx: Context) => layout("Page not found", [
  tags.main({ cls: 'not-found' }, [
    tags.header([
      tags.h1('404'),
      tags.div([
        tags.strong('Page not found!'),
        tags.p([
          'Return to ',
          tags.a({ href: '/' }, ['the homepage']),
        ])
      ])
    ])
  ])
], {
})(ctx);
