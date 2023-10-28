import http from 'http';

import * as dotenv from 'dotenv';
import express from 'express';
import { Server } from 'socket.io';

import connectDB from './config/db';

dotenv.config();

const PORT = Number(process.env.PORT) || 8080;

connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', async (socket) => {
  console.log('a user connected');
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
