import http from 'http';

import express from 'express';
import { Server } from 'socket.io';

import * as config from './config';
import Manager from './game/manager';
import * as routes from './routes';
import type { UserType } from './schemas/user';

const PORT = Number(config.env.PORT) || 8080;

config.connectDB();
config.passportInit();

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const manager = new Manager(io);

config.loadMiddleware(app);

// passport routes are already prefixed with /api
app.use(routes.passport);

app.get('/api/ping', (req, res) => {
  console.log(req.isAuthenticated());
  res.send('pong');
});

app.get('/player', (req, res) => {
  if (req.isAuthenticated()) {
    const uuid = manager.addPlayer(<UserType> req.user);
    res.json({ uuid });
  }
});

io.on('connection', async (socket) => {
  console.log('a user connected');

  socket.on('queue', (uuid: string) => {
    manager.enterQueue(uuid, socket);
  });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
