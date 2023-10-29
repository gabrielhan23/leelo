import { Socket } from 'socket.io';

import Team from './team';
import type { UserType } from '../schemas/user';

class Player {
  uuid: string;

  user: UserType;

  socket: null | Socket = null;

  team!: Team;

  constructor(uuid: string, user: UserType) {
    this.uuid = uuid;
    this.user = user;
  }

  attachSocket(socket: Socket) {
    this.socket = socket;

    type GameTypeBody = {
      line: string;
      lineNum: number;
    };
    this.socket.on('team/type', (data: GameTypeBody) => {
      this.team.updateCode(this, data.line, data.lineNum);
    });

    // type of data is defined solely in frontend!
    this.socket.on('team/message', (data) => {
      this.team.relay(this, data);
    });

    this.socket.on('team/runCode', () => {
      this.team.checkCode();
    });
  }

  emit(...msg: any) {
    if (this.socket) {
      this.socket.emit(msg);
    }
  }
}

export default Player;
