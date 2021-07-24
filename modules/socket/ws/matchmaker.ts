import { GroupedWithin } from '../../common/groupedwithin';
import { ChestInHandler, OutHandler, ConnectSris, DisconnectSris } from './chestin';
import { Who } from './actorApi';
import { SocketSri } from '../socket';

export default class Matchmaker {

  static make = (chestIn: ChestInHandler) => new Matchmaker(chestIn)

  connect: GroupedWithin<Who> = GroupedWithin.make<Who>(6, 500, connects => {
    this.chestIn.matchmaker(ConnectSris.make(connects));
  });

  disconnect: GroupedWithin<SocketSri> = GroupedWithin.make<SocketSri>(10, 500, sris => {
    this.chestIn.matchmaker(DisconnectSris.make(sris));
  });
  
  constructor(readonly chestIn: ChestInHandler) {
    
  }
  
}
