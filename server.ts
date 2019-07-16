import * as express from 'express';
import * as env from 'dotenv';

import middlewares from './src/middlewares';


const app = express();

const result = require('dotenv').config({path: __dirname + '/.env'})

if (result.error) {
  throw result.error
}

console.log(result.parsed)

middlewares(app);


export default app;

//express@5.0.0-alpha.7
