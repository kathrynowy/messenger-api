import { chatHelper } from '../db/helpers';
import { Controller } from '../types/controller';


export const addChat: Controller = async(req, res, next) => {
  try {
    res.json(await chatHelper.create(req.body));
  } catch (error) {
    next(error);
  }
};

export const getChats: Controller = async(req, res, next) => {
  try {
    const { userId } = req.query;

    res.json(await chatHelper.getAll(userId));
  } catch (error) {
    next(error);
  }
};
