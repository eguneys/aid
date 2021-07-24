import { Who } from '../socket/ws/actorApi';
import { MatchMember } from './matchmakersocket';
import { SocketSri } from '../socket/socket';

export default class MatchTrouper {

  members: Map<SocketSri, MatchMember>

  constructor() {
    this.members = new Map(); 
  }

  getSrisP = () => {
    return [...this.members.keys()];
  }

  getMember = (who: Maybe<Who>): Maybe<MatchMember> => {
    if (who) {
      return this.members.get(who.sri);
    }
  }

  join = (member: MatchMember) => {

    this.members.set(member.sri, member);
    
  }

  leaveBatch = (sris: Array<SocketSri>) => sris.forEach(_ => this.quit(_));

  quit(sri: SocketSri) {
    this.members.delete(sri);
  }
  
}
