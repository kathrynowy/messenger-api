import * as express from 'express';

import { addMessage, getMessages } from '../controllers/message';


export default express.Router()
  .post('/add', addMessage)
  .get('/all', getMessages);
