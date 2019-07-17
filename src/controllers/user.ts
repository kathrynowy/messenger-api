import { Controller } from '../types/controller';
import { userHelper } from '../db/helpers'

export const addUser: Controller = async(req, res, next) => {
  try {
    console.log('dfgdfg');
    const user = await userHelper.create(req.body);

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers: Controller = async(req, res, next) => {
  try {
    res.json(await userHelper.getAll());
  } catch (error) {
    next(error);
  }
};
