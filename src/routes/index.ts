import * as express from 'express';

import example from './example';

export default 
  express.Router()
    .use('/', example)
;