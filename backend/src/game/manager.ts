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
    }
  }

  enterQueue(uuid: string, socket: Socket) {
    const p = this.players.get(uuid);
    if (!p) {
      throw new Error('Player not found');
    }

    p.attachSocket(socket);

    this.queue.push(p);
    this.findMatches();
  }

  leaveQueue(p: Player) {
    this.queue = this.queue.filter((player) => player !== p);
  }

  createGame(team1: Player[], team2: Player[]) {
    const code = this.generateUniqueCode();

    const g = new Game(team1, team2, (msg: string) => this.io.to(code).emit(msg));

    this.games.set(code, g);
  }

  deleteGame() {
    //
  }

  // cryptographically secure uuid to identify players
  private generateUuid(): string {
    let s = '';
    do {
      const uuid = new Int32Array();
      crypto.getRandomValues(uuid);
      s = uuid.toString();
    } while (this.players.has(s));
    return s;
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
