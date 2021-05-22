import tags from '../tags';
import * as h from '../helper';


export function newForm() {
  return h.postForm({ cls: 'new-study', action: '/study' }, [
    // tags.input({ cls: 'input', type: 'text', required: 'true', name: 'link', placeholder: 'Lichess Study Link' }),
    h.submitButton({ cls: 'button button-green' }, ['+ New Study'])
  ]);
}
