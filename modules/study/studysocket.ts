import StudyApi from './studyapi';
import JsonView from './jsonview';
import { RoomSocket, RemoteSocket } from '../socket';

export default class StudySocket {

  send = this.remoteSocketApi.makeSender("study-out").apply;
  
  rooms = RoomSocket.makeRoomMap(this.send);


  constructor(readonly remoteSocketApi: RemoteSocket,
              readonly api: StudyApi,
              readonly json: JsonView) {

    remoteSocketApi.subscribe('study-in', _ => this.studyHandler(_));
    
  }

  studyHandler(pin: any) {
    return false;
  }
  
  
}
