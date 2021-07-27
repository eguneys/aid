import { BSONId, DocId } from '../db/bson';
import { Color } from './color';
import { Game } from './game';
import { Team } from './team';
import { Player } from './player';

export type PlayerDoc = DocId & {
  color: string,
  userId?: string
};

export type TeamDoc = DocId & {
  color: string,
  players: Array<PlayerDoc>
};

export type GameDoc = DocId & {
  aTeam: TeamDoc,
  bTeam: TeamDoc
}

export const PlayerBSONHandler: BSONId<Player> = {
  read(doc: PlayerDoc): Player {
    return new Player(
      doc.id,
      Color.makeByLetter(doc.color),
      doc.userId)
  },

  write(player: Player): PlayerDoc {
    let res: PlayerDoc = {
      id: player.id,
      color: player.color.letter,
      userId: player.userId
    };

    return res;
  }
}
export const TeamBSONHandler: BSONId<Team> = {
  read(doc: TeamDoc): Team {
    return new Team(doc.id,
                    Color.makeByLetter(doc.color),
                    doc.players.map(_ => PlayerBSONHandler.read(_)))
  },

  write(team: Team): TeamDoc {
    let res: TeamDoc = {
      id: team.id,
      color: team.color.letter,
      players: team.players.map(_ => PlayerBSONHandler.write(_) as PlayerDoc)
    };

    return res;
  }
}

export const GameBSONHandler: BSONId<Game> = {
  read(doc: GameDoc): Game {
    return new Game(
      doc.id,
      TeamBSONHandler.read(doc.aTeam),
      TeamBSONHandler.read(doc.bTeam));
  },

  write(game: Game): GameDoc {
    let res: GameDoc = {
      id: game.id,
      aTeam: TeamBSONHandler.write(game.aTeam) as TeamDoc,
      bTeam: TeamBSONHandler.write(game.bTeam) as TeamDoc
    };

    return res;
  }
}
