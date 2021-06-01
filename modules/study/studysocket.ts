import StudyApi from './studyapi';
import JsonView from './jsonview';
import { RoomSocket, RemoteSocket } from '../socket';
import { NotifyVersion } from '../socket/roomsocket';
import { ChestIn, isTellRoomWho } from '../socket/ws/chestin';
import * as cout from '../socket/ws/clientout';
import { PositionRef } from './position';
import { Who } from '../socket/ws/actorApi';
import { StudyId } from './study';

export default class StudySocket {

  send = this.remoteSocketApi.makeSender("study-out").apply;
  
  rooms = RoomSocket.makeRoomMap(this.send);


  constructor(readonly remoteSocketApi: RemoteSocket,
              readonly api: StudyApi,
              readonly json: JsonView) {

    remoteSocketApi.subscribe('study-in', _ => this.studyHandler(_));

    api.registerSocket(this);
  }

  studyHandler(pin: ChestIn) {
    if (isTellRoomWho(pin)) {
      if (cout.isAddChapter(pin.msg)) {
        if (pin.who) {
          this.api.addChapter(pin.id,
                              pin.msg.d)(pin.who);
        }
      }
    }
  }



  addChapter(p: PositionRef, w: Who) {
    return this.version("addChapter", {
      p,
      w
    });
  }


  
  private version(tpe: string, data: object): SendToStudy {
    return (studyId: StudyId) =>
      this.rooms.tell(studyId, NotifyVersion.make(tpe, data));
  }
  
}

export type SendToStudy = (_: StudyId) => void
