import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import { User } from '../db/schemas';
import { generateToken } from '../service/auth';

const LocalStrategy = passportLocal.Strategy;

passport.use('local-login', new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, username, password, done) => {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return done(null, false, { message: 'No user found' });
      }

      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Wrong password' });
      }

      req.body.token = generateToken(user._id);

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
));
