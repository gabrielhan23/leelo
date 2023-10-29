import Player from './player';
import problems, { ProblemType } from './problems';
import Team from './team';

/*
list of players
test cases done (to broadcast)
broadcasting
problem statement
code running
*/

class Game {
  teams: Team[];

  problem: ProblemType;

  broadcast: (msg: any) => void;

  constructor(team1: Player[], team2: Player[], broadcast: (msg: any) => void) {
    this.teams = [new Team(team1, this), new Team(team2, this)];
    this.broadcast = broadcast;

    this.problem = problems[Math.round(Math.random() / problems.length)];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { testCases, ...sendProblem } = this.problem;
    this.broadcast({
      message: 'game/start',
      body: sendProblem,
    });
  }
}

export default Game;
