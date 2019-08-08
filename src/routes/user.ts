import * as express from 'express';

import { addUser, getUsers } from '../controllers/user';


export default express.Router()
  .post('/add', addUser)
  .get('/all', getUsers)
;
