import * as express from 'express';

import { addMessage, getMessages, readMessages } from '../controllers/message';


export default express.Router()
  .get('/all', getMessages)
  .post('/add', addMessage)
  .post('/read', readMessages)
;
