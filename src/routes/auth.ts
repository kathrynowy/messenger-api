import * as express from 'express';
import * as passport from 'passport';

import { login, signUp } from '../controllers/auth';

export default express.Router()
  .post('/signup', signUp)
  .post('/login', passport.authenticate('local-login', { session: false }), login);
