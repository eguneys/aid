import { Pov } from '../game/pov';
import { Game } from '../game/game';
import { Team } from '../game/team';
import { Player } from '../game/player';
import { RoundData, RoundGame, RoundTeam, RoundPlayer } from 'shared_options';
import LightUserApi from '../user/lightuserapi';
import { fufail } from '../common';

export default class JsonView {

  constructor(readonly lightUserApi: LightUserApi) {
    
  }

  apply(pov: Pov): Fu<RoundData> {
    return this.gameJsonView(pov.game).then(game => ({game}));
  }

  gameJsonView(game: Game): Fu<RoundGame> {
    return Promise.all([this.teamJsonView(game.aTeam),
                       this.teamJsonView(game.bTeam)]).then(([aTeam, bTeam]) => ({
                         aTeam,
                         bTeam
                       }));
  }

  teamJsonView(team: Team): Fu<RoundTeam> {
    return Promise.all(team.players.map(_ => this.playerJsonView(_)))
      .then(players => ({
        color: team.color.letter,
        players
      }));
  }


  playerJsonView(player: Player): Fu<RoundPlayer> {
    if (!player.userId) {
      return fufail(Error('no user'));
    }
    return this.lightUserApi.get(player.userId).then(lightUser => ({
      name: lightUser?.name || 'no user',
    }));
  }
}
