import { exec } from 'child_process';

import Game from './game';
import Player from './player';

class Team {
  players: Player[];
  code: string[] = [];
  testsPassed: number = 0;
  game: Game;

  constructor(players: Player[], game: Game) {
    this.players = players;
    this.game = game;

    for (const p of players) {
      p.team = this;
    }
  }

  relay(from: Player, msg: any) {
    const p = this.players.filter((player) => player !== from)[0];
    p.emit(msg);
  }

  // lineNum is 0-indexed
  updateCode(from: Player, line: string, lineNum: number) {
    this.code[lineNum] = line;
    this.relay(from, {
      message: 'game/type',
      body: {
        line,
        lineNum,
      },
    });
  }

  checkCode(){
    // for x in
    exec('python3 shell.py', { timeout: 1 }, (error, stdout, stderr) => {
      if (error) {
        return error;
      } else if (stderr) {
        return stderr;
      } else {
        if (stdout === this.game.problem.testCases[0].output) {
          return;
        }
      }
    });
  }
}

export default Team;
