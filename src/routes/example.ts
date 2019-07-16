import * as express from 'express';

import { example } from '../controllers/example';

export default
  express.Router()
    .get('/', example);
