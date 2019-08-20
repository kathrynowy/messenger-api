import { userHelper } from '../db/helpers';
import { Controller } from '../types/controller';

export const addUser: Controller = async(req, res, next) => {
  try {
    res.json(await userHelper.create(req.body));
  } catch (error) {
  }
};

export const getUsers: Controller = async(req, res, next) => {
  try {
    res.json(await userHelper.getAll());
  } catch (error) {
    next(error);
  }
};

export const currentUser: Controller = async(req, res, next) => {
  try {
    res.json(await userHelper.getById(req.body.id));
  } catch (error) {
    next(error);
  }
};
