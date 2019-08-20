import { GetUserAuthInfoRequest } from 'src/models/userAuthInfoRequest';
import { userHelper } from '../db/helpers';
import { generateHash } from '../service/auth';
import { Controller } from '../types/controller';

export const signUp: Controller = async(req, res, next) => {
  const isUserExist = await userHelper.checkUserExistence(req.body.username);

  if (isUserExist && isUserExist.length) {
    return res.status(500).json({ error: 'username must be unick' });
  } else {
    try {
      const newUser = await userHelper.create({
        username: req.body.username,
        password: generateHash(req.body.password),
        chats: []
      });

      res.json(newUser);
    } catch (error) {
      next(error);
    }
  }
};

export const login: Controller = (req: GetUserAuthInfoRequest, res, next) => {
  try {
    return res.status(200).json({
      username: req.body.username,
      token: req.body.token,
      id: req.user._id
    });
  } catch (error) {
    next(error);
  }
};
