import * as express from 'express';

import dialogue from './dialogue';
import message from './message';
import user from './user';


export default
  express.Router()
    .use('/user', user)
    .use('/message', message)
    .use('/dialogue', dialogue);
