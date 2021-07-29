import Matchmaker from './matchmaker';
import RoundCrowd from './roundcrowd';

export class Services {

  static make = (matchmaker: Matchmaker,
                 roundCrowd: RoundCrowd) => new Services(matchmaker,
                                                         roundCrowd);


  constructor(readonly matchmaker: Matchmaker,
              readonly roundCrowd: RoundCrowd) {
    
  }
  
}
