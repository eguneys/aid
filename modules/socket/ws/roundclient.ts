import WsClient from './client';
import { ClientEmit, Broom } from './types';
import { UserWithSession } from '../../security/session';
import * as cout from './clientout';
import * as cin from './clientin';
import * as chIn from './chestin';
import * as chOut from './chestout';
import RoomClient, { State as RoomActorState } from './roomclient';
import { SocketVersion } from '../socket';
import Bus, { _room } from './bus';
import { Services } from './services';

export default class RoundClient extends WsClient {

  static make = (
    roomState: RoomActorState,
    chestIn: chIn.ChestInHandler,
    clientIn: ClientEmit,
    services: Services,
    req: any,
    onStop: () => void,
    sri: string,
    user: Maybe<UserWithSession>) =>
    new RoundClient(roomState,
                    chestIn,
                    clientIn,
                    services,
                    onStop,
                    sri,
                    user);

  constructor(
    roomState: RoomActorState,
    chestIn: chIn.ChestInHandler,
    clientIn: ClientEmit,
    services: Services,
    onStop: () => void,
    sri: string,
    user: Maybe<UserWithSession>) {

    super(chestIn,
          clientIn,
          services,
          onStop,
          sri,
          user);

    this.state = new State(roomState)

    this.state.busChans.forEach(channel =>
      Bus.subscribe(channel, this._in));

    services.roundCrowd.connect(roomState.id, user?.user);
  }

  state: State

  _in = (_: cin.ClientMsg) => {
    if (cin.isPayload(_)) {
      this.clientIn(_)
    }

    if (cin.Crowd.isCrowd(_)) {
      if (_.equals(this.state.room.lastCrowd)) {
        
      } else {
        this.clientIn(_);
        this.state.room.lastCrowd = _;
      }
    }
  }

  _all = (_: cin.ClientMsg) => {
    super._all(_);
    
    if (Broom.isBroom(_)) {
      super.broom(_.oldSeconds); 
    }    
  }

  onStop() {
    super.onStop();
    this.state.busChans.forEach(channel =>
      Bus.unsubscribe(channel, this._in));
    
    this.services.roundCrowd.disconnect(this.state.room.id, this.user?.user);
  }
  
}


export class State {

  busChans: Array<string> = [
    _room(this.room.id)
  ];
  
  constructor(readonly room: RoomActorState) {
    
  }
  
}
