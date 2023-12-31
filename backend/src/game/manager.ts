import { Server, Socket } from 'socket.io';

import Game from './game';
import Player from './player';
import type { UserType } from '../schemas/user';

/*
matchmaking / queueing
game creation and deletion
*/

class Manager {
  queue: Player[];

  players: Map<string, Player>;

  games: Map<string, Game>;

  io: Server;

  constructor(io: Server) {
    this.queue = [];
    this.players = new Map();
    this.games = new Map();
    this.io = io;
  }

  addPlayer(user: UserType): string {
    const uuid = this.generateUuid();
    console.log('I GOT HEREEEE');
    console.log(uuid);

    // if (this.queue.includes(user)) {
    //   return;
    // }
    this.players.set(uuid, new Player(uuid, user));

    return uuid;
  }

  findMatches() {
    if (this.queue.length == 4) {
      this.queue.sort((a: Player, b: Player) => a.user.elo - b.user.elo);
      this.createGame(
        [this.queue[0], this.queue[3]],
        [this.queue[1], this.queue[2]],
      );
    } else {
      this.io.to('queue').emit('queue', this.queue.length);
    }
  }

  enterQueue(uuid: string, socket: Socket) {
    const p = this.players.get(uuid);
    console.log('UUID GETTING ENTERED QUEue');
    console.log(uuid);
    if (!p) {
      throw new Error('Player not found');
    }

    p.attachSocket(socket);
    p.socket!.join('queue');

    this.queue.push(p);
    this.findMatches();
  }

  leaveQueue(p: Player) {
    this.queue = this.queue.filter((player) => player !== p);
  }

  createGame(team1: Player[], team2: Player[]) {
    const code = this.generateUniqueCode();

    for (const p of team1.concat(team2)) {
      this.leaveQueue(p);
      p.socket!.leave('queue');
      p.socket!.join(code);
    }

    const g = new Game(team1, team2, (msg: any) => this.io.to(code).emit(msg));

    this.games.set(code, g);
  }

  deleteGame() {
    //
  }

  // cryptographically secure uuid to identify players
  private generateUuid(): string {
    const uuid = new Int32Array();
    crypto.getRandomValues(uuid);
    return Math.random().toString(36);
    return uuid.toString();
  }

  // code used for game id and socket rooms
  private generateUniqueCode(): string {
    let code = '';
    do {
      code = Math.random().toString(36).substring(2, 6);
    } while (this.games.has(code));
    return code.toUpperCase();
  }
}

export default Manager;
