import * as express from 'express';

import { addUser, currentUser, getUsers } from '../controllers/user';


export default express.Router()
  .post('/add', addUser)
  .get('/all', getUsers)
  .get('/current', currentUser);
