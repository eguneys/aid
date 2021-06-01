import { Coll } from '../db';
import Study from './study';
import { ChapterId } from './chapter';

export default class StudyRepo {

  coll: Coll<Study>
  
  constructor(coll: Coll<Study>) {
    this.coll = coll;
  }

  insert(study: Study) {
    return this.coll.insert(study);
  }

  byId(id: ChapterId) {
    return this.coll.one({ id });
  }

  updateNow(s: Study) {
    return this.coll.update(s.id, {
      updatedAt: Date.now()
    });
  }

  updateSomeFields(s: Study) {
    return this.coll.update(s.id, {
      position: s.position,
      name: s.name,
      updatedAt: Date.now()
    });
  }

  
}
