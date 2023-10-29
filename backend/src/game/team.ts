import { exec } from 'child_process';

import Game from './game';
import Player from './player';
import { ProblemType } from './problems';

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
    const l = line.split('\n');
    this.code[lineNum] += l[0];
    this.code.splice(lineNum, 0, ...l.slice(1));

    this.relay(from, {
      message: 'game/type',
      body: {
        line,
        lineNum,
      },
    });
  }

  allCode(inputs: any[]) {
    let c: string = '';
    for (const line of this.code) {
      c += line;
    }
    c += `\n ${this.game.problem.funcName}(*${inputs})`;
    return c;
  }

  checkCode(){
    for (const testCase of this.game.problem.testCases) {
      exec(`echo ${this.allCode(testCase.input)} > temp.txt | python3 `, { timeout: 1 }, (error, stdout, stderr) => {
        if (error) {
          return error;
        } else if (stderr) {
          return stderr;
        } else {
          if (stdout === testCase.output) {
            return 'success';
          } else {
            return 'Recieved: ' + stdout;
          }
        }
      });
    }
  }
}

export default Team;
