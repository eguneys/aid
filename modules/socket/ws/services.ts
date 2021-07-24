import Matchmaker from './matchmaker';

export class Services {

  static make = (matchmaker: Matchmaker) => new Services(matchmaker);


  constructor(readonly matchmaker: Matchmaker) {
    
  }
  
}
