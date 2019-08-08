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
    const { dialogueId } = req.query;

    res.json(await messageHelper.getAll(dialogueId));
  } catch (error) {
    next(error);
  }
};
