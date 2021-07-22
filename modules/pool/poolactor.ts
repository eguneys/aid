import { PoolConfig } from './poolconfig';
import { PoolMember } from './poolmember';
import { MatchMaking } from './matchmaking';
import { GameStarter } from './gamestarter';

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
  
  
}
