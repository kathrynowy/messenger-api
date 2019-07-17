import * as express from 'express';

import {
  addDialogue,
  getDialogues
} from '../controllers/dialogue';


export default express.Router()
  .post('/add', addDialogue)
  .get('/all', getDialogues)
;
