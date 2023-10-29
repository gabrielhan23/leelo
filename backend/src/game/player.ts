import { Socket } from 'socket.io';

import type { UserType } from '../schemas/user';

class Player {
  uuid: string;

  user: UserType;

  socket: null | Socket;

  constructor(uuid: string, user: UserType) {
    this.uuid = uuid;
    this.user = user;
    this.socket = null;
  }

  attachSocket(socket: Socket) {
    this.socket = socket;

    this.socket.on('type', (data) => {
      console.log(data);
    });
  }

}

export default Player;
