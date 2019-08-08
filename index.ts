import * as http from 'http';
import * as socketIo from 'socket.io';

import app from './server';
import mongoose from './src/context';
import { addUserId, sendMessage } from './src/socket';


const server = new http.Server(app);
const port = process.env.PORT || 8000;
const users = [];

export const io = socketIo(server, {
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

/* tslint:disable:no-console */
io.on('connection', (socket: any) => {
  console.log('New Socket Connection');

  socket.on('SEND_MESSAGE', (messageData: any) => sendMessage(socket, messageData, users));

  socket.on('SEND_USER_ID', (userId: string) => addUserId(users, socket, userId));
});

mongoose.connection.on('open', () => {
  server.listen(port, () => console.log(`Server is starting on port - ${ port }`));
});
