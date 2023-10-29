import Player from './player';

/*
list of players
test cases done (to broadcast)
broadcasting
problem statement
code running
*/

class Game {
  team1: Player[];
  team2: Player[];

  broadcast: (msg: string) => void;

  constructor(team1: Player[], team2: Player[], broadcast: (msg: string) => void) {
    this.team1 = team1;
    this.team2 = team2;
    this.broadcast = broadcast;

    this.broadcast('game/start');
  }
}

export default Game;
