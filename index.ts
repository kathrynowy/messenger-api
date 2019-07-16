import * as http from 'http';
import * as socket from 'socket.io';

import app from './server';
import mongoose from './src/context';


const server = new http.Server(app);
const port = process.env.PORT || 3200;

export const io = socket(server, {
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

io.on('connection', () => console.log('New Socket Connection'));
mongoose.connection.on('open', () => {

  server.listen(port, () => console.log(`Server is starting on port - ${ port }`));
});
