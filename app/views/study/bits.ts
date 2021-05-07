import tags from '../tags';
import * as h from '../helper';


export function newForm() {
  return h.postForm({ cls: 'new-study', action: '/study' }, [
    h.submitButton({ cls: 'button button-green' }, ['+ New'])
  ]);
}
