import { RoomId } from './actorApi';
import { GroupedWithin } from '../../common/groupedwithin';
import { HashMap } from '../../common/hashmap';
import User from '../../user/user';
import Bus, { _room } from './bus';
import { RoomState, Output as RoomOutput } from './roomcrowd';
import { Crowd } from './clientin';
import CrowdJson from './crowdjson';

export default class RoundCrowd {

  static make = (json: CrowdJson) => new RoundCrowd(json);
  
  rounds = new HashMap<RoomId, RoundState>()
  
  constructor(readonly json: CrowdJson) {
  }

  connect(roomId: RoomId, user: Maybe<User>) {
    this.publish(roomId, this.rounds.compute(roomId, (_, cur) => {
      if (!cur) {
        cur = new RoundState()
      }
      cur.connect(user);
      return cur;
    }));
  }

  disconnect(roomId: RoomId, user: Maybe<User>) {
    let res = this.rounds.computeIfPresent(roomId, (_, round) => {
      round.disconnect(user);
      this.publish(roomId, round);
      if (!round.isEmpty) {
        return round;
      }
    });
    if (res) {
      this.publish(roomId, res);
    }
  }

  publish(roomId: RoomId, round: RoundState) {
    this.outputBatch.apply(Output.outputOf(roomId, round))
  }

  
  outputBatch = GroupedWithin.make<Output>(10, 700, outputs => {
    let aggregated = outputs.reduce((crowds, crowd) => {
      crowds.set(crowd.room.roomId, crowd);
      return crowds;
    }, new Map<RoomId, Output>());

    for (let [_, output] of aggregated) {
      this.json.round(output).then(_ =>
        Bus.publish(_room(output.room.roomId), _))
    }
    
  });

  
}

export class RoundState {

  constructor(readonly room: RoomState = new RoomState()) {
    
  }


  connect(user: Maybe<User>) {
    this.room.connect(user);
  }

  disconnect(user: Maybe<User>) {
    this.room.disconnect(user);
  }

  get isEmpty() {
    return this.room.isEmpty;
  }
  
}


export class Output {

  static outputOf = (roomId: RoomId, round: RoundState) =>
    new Output(RoomOutput.outputOf(roomId, round.room))
  
  constructor(readonly room: RoomOutput) {
    
  }
              
  
}
