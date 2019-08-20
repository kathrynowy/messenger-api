import * as express from 'express';

import { addChat, getChats } from '../controllers/chat';


export default express.Router()
  .post('/add', addChat)
  .get('/all', getChats);
