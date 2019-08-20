import { messageHelper } from '../db/helpers';
import { Controller } from '../types/controller';

export const addMessage: Controller = async(req, res, next) => {
  try {
    res.json(await messageHelper.create(req.body));
  } catch (error) {
    next(error);
  }
};

export const getMessages: Controller = async(req, res, next) => {
  try {
    const { chatId } = req.query;

    res.json(await messageHelper.getAll(chatId));
  } catch (error) {
    next(error);
  }
};
