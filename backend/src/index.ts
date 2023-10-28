import http from 'http';

import express from 'express';
import { Server } from 'socket.io';

import * as config from './config';
import * as routes from './routes';

const PORT = Number(config.env.PORT) || 8080;

config.connectDB();
config.passportInit();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

config.loadMiddleware(app);

// passport routes are already prefixed with /api
app.use(routes.passport);

app.get('/api/ping', (req, res) => {
  console.log(req.isAuthenticated());
  res.send('pong');
});

io.on('connection', async () => {
  console.log('a user connected');
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
