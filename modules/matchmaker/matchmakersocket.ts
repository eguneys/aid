import { RoomSocket, RemoteSocket } from '../socket';
import { ChestIn } from '../socket/ws/chestin';
import * as cout from '../socket/ws/clientout';

export default class MatchmakerSocket {

  send = this.remoteSocketApi.makeSender('matchmaker-out').apply;


  constructor(readonly remoteSocketApi: RemoteSocket) {

    remoteSocketApi.subscribe('matchmaker-in', _ => this.studyHandler(_));
  }

  studyHandler = (pin: ChestIn) => {
    console.log(pin);
  }

  
}
