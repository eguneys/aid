import { PoolConfig } from './poolconfig';
import { PoolMember } from './poolmember';
import { MatchMaking } from './matchmaking';
import { GameStarter } from './gamestarter';
import { Joiner } from './poolapi';
import { UserId } from '../user/user';
import { SocketSri } from '../socket/socket';


export class PoolActor {

  static make = (config: PoolConfig,
                 gameStarter: GameStarter) => new PoolActor(config,
                                                            gameStarter)
  
  members: Array<PoolMember> = []

  nextWaveTimeoutId: any
  
  constructor(readonly config: PoolConfig,
              readonly gameStarter: GameStarter) {

    this.scheduleWave() 
    
  }

  scheduleWave() {
    this.nextWaveTimeoutId = setTimeout(this.scheduledWave,
                                        this.config.every * 1000 + Math.random()*1000)
  }

  scheduledWave = () => {
    this.runWave();
  }

  runWave = () => {

    clearTimeout(this.nextWaveTimeoutId);
    this.poolHooks();
    
  };

  fullWave = () => {
    this.runWave();
  };


  poolHooks = async () => {


    let candidates = this.members;

    let pairings = await MatchMaking(candidates, this.config.n);

    let pairedMembers = pairings.flatMap(_ => _.members);

    this.members = this.members
      .filter(_ => !pairedMembers.includes(_))
      .map(_ => _.incMisses);

    if (pairings.length > 0) {
      this.gameStarter.apply(this.config, pairings);
    }

    this.scheduleWave();

    
    
  };


  join = (joiner:Joiner) => {
    let member = this.members.find(_ => joiner.is(_))

    if (member) {
      
    } else {
      this.members.push(PoolMember.makeWithJoin(joiner, this.config))

      if (this.members.length >= this.config.players) {
        this.fullWave();
      }
    }
  }

  leave = (userId: UserId) => {
    this.members = this.members.filter(_ => _.userId !== userId)
  }

  sries = (sries: Array<SocketSri>) => {
    this.members = this.members.filter(_ => sries.includes(_.sri))
  }
  
  
}
