import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as passport from 'passport';

import '../passport';
import mainRouter from '../routes';
import errorHandler from './error';
import logger from './logger';
import notFoundHandler from './not-found';

export default (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(logger);
  app.use(cors());
  app.use(passport.initialize());
  app.use(mainRouter);
  app.all('*', notFoundHandler);
  app.use(errorHandler);
};
