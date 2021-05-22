import { StudyId } from './study';
import { Result } from '@badrap/result';

export class importGame {

  static form = (body: any) => {

    // if (!body || !body.link || typeof body.link !== 'string') {
    //   return Result.err(new Error('Link is required'));
    // }

    // let studyId = body.link.substring(body.link.length - 8);

    // if (studyId.length !== 8) {
    //   return Result.err(new Error('Cant parse studyid'));
    // }

    return Result.ok(Data.make());

    
    
  };
  
}


export class Data {

  static make = () => new Data();
  
  constructor() {
  }
  
}
