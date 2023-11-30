// 👉 Configuring path for the '.env' file
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dotenvPath = join(__dirname, './config/.env');
dotenv.config({ path: dotenvPath });

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { nameSpace_Chat } from './routes/socket-io/namespace-chat.js';

// 👉 Creating Server
const app = express();
export const httpServer = http.createServer(app);
export const io = new Server(httpServer, {
  cors: { origin: process.env.CLIENT },
});

// 👉 Routes/controllers
nameSpace_Chat();

// 👉 Running the http Server
httpServer.listen(process.env.PORT || 8000, () => {
  const PORT = process.env.PORT || 8000;
  console.log(`> Listening at port ${PORT}`);
});
