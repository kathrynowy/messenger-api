import * as express from 'express';

import { addChat, getChatById, getChats } from '../controllers/chat';


export default express.Router()
  .post('/add', addChat)
  .get('/all', getChats)
  .get('/:chatId', getChatById);
