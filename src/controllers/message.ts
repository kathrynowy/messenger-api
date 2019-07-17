import { Controller } from '../types/controller';
import { messageHelper } from '../db/helpers'

export const addMessage: Controller = async(req, res, next) => {
  try {
    const message = await messageHelper.create(req.body);

    res.json(message);
  } catch (error) {
    next(error);
  }
};

export const getMessages: Controller = async(req, res, next) => {
  try {
    const { userId } = req.query;

    res.json(await messageHelper.getByUserId(userId));
  } catch (error) {
    next(error);
  }
};
