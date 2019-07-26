import * as express from 'express';

import example from './example';
import message from './message';
import user from './user';
import dialogue from './dialogue';


export default 
  express.Router()
    .use('/', example)
    .use('/user', user)
    .use('/message', message)
    .use('/dialogue', dialogue)
;
