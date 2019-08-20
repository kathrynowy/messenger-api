import * as express from 'express';

import auth from './auth';
import chat from './chat';
import message from './message';
import user from './user';


export default
  express.Router()
    .use('/auth', auth)
    .use('/user', user)
    .use('/message', message)
    .use('/chat', chat);
