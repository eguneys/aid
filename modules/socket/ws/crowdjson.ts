import LightUserApi from '../../user/lightuserapi';
import { Output as RoundCrowdOutput } from './roundcrowd';
import * as cin from './clientin';

export default class CrowdJson {

  static make = (lightUserApi: LightUserApi) => new CrowdJson(lightUserApi);
  
  constructor(readonly lightUserApi: LightUserApi) {
    
  }

  round(crowd: RoundCrowdOutput): Fu<cin.Crowd> {
    return Promise.all(
      crowd.room.users.map(_ =>
        this.lightUserApi.get(_))).then(names =>
          cin.Crowd.make(names.flatMap(_ => !!_?[_.name]:[] )));
  }
  
}
