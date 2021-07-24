import * as chest from '../';
import { RoomSocket, RemoteSocket } from '../socket';
import { ChestIn,
         isTellSri,
         ConnectSris,
         DisconnectSris } from '../socket/ws/chestin';
import * as cout from '../socket/ws/clientout';
import { LobbyPoolSize, LobbyPairings } from '../socket/ws/chestout';
import { SocketSri } from '../socket/socket';
import { UserId } from '../user/user';
import { Who } from '../socket/ws/actorApi';
import MatchTrouper from './matchtrouper';
import MatchmakerActor from './matchmakeractor';
import { PoolApi, Joiner, Pairing  } from '../pool/poolapi';

export default class MatchmakerSocket {

  send = this.remoteSocketApi.makeSender('matchmaker-out').apply;

  trouper: MatchTrouper = new MatchTrouper()

  constructor(readonly remoteSocketApi: RemoteSocket,
              readonly matchmaker: MatchmakerActor,
              readonly poolApi: PoolApi) {

    remoteSocketApi.subscribe('matchmaker-in', this.matchmakerHandler);


    chest.common.bus.subscribe('poolPairings', this.poolPairings);

    chest.common.bus.subscribe('poolSize', this.poolSize);

    matchmaker.setSocket(this.trouper);
  }

  poolSize = (size: number) => {
    this.send(LobbyPoolSize.make(size))
  };

  poolPairings = (pairings: Array<Pairing>) => {
    this.send(LobbyPairings.make(pairings));
  };

  controller = (member: MatchMember) => {
    let userId = member.userId;
    return (o: any) => {
      switch (o.t) {
        case 'poolIn':

          if (!userId) {
            return false;
          }
          this.poolApi.join(o.d.id,
                            new Joiner(
                              userId,
                              member.sri,
                              0));
          return true;
          break;
        case 'poolOut':
          if (!userId) {
            return false;
          }

          let id = o.d;
          
          this.poolApi.leave(o.d, userId);
          return true;
          break;
      }
      return false;
    };
  };

  getOrConnect = async (who: Who): Fu<MatchMember> => {
    let member = this.trouper.getMember(who)

    if (!member) {
      member = new MatchMember(who);
      this.trouper.join(member);
    }

    return member;
  }
  
  matchmakerHandler = async (pin: ChestIn) => {
    if (ConnectSris.isConnectSris(pin)) {
      pin.sris.forEach(who => this.getOrConnect(who));
    } else if (DisconnectSris.isDisconnectSris(pin)) {
      this.trouper.leaveBatch(pin.sris);
    } else if (isTellSri(pin)) {
      if (pin.who && this.messagesHandled.includes(pin.payload.t)) {

        let member = await this.getOrConnect(pin.who)

        if (!this.controller(member)(pin.payload)) {
          console.warn(`Can't handle ${pin.payload.t}`);
        }
        
      }
    }
  }

  messagesHandled: Array<string> = [
    'poolIn',
    'poolOut'
  ]

  
}

export class MatchMember {

  get sri(): SocketSri {
    return this.who.sri
  }

  get userId(): Maybe<UserId> {
    return this.who.userId;
  }

  constructor(readonly who: Who) {


    
    
  }
  
}
