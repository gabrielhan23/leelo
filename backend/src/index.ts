import http from 'http';

import * as dotenv from 'dotenv';
import express from 'express'

dotenv.config();

const PORT = Number(process.env.PORT) || 8080;

const app = express();
const server = http.createServer(app)

server.listen(PORT, () => console.log('Server started on port ${PORT}'))

module.exports = app;

