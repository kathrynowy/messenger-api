import { chatHelper, messageHelper } from '../db/helpers';
import { Controller } from '../types/controller';

export const addMessage: Controller = async(req, res, next) => {
  try {
    const message = await messageHelper.create(req.body);

    await chatHelper.updateLastMessage(message);
    await messageHelper.readMessages(req.body.user, req.body.chat);

    res.json(message);
  } catch (error) {
    next(error);
  }
};

export const readMessages: Controller = async(req, res, next) => {
  try {
    const { user, chat } = req.body;

    res.json(await messageHelper.readMessages(user, chat));
  } catch (error) {
    next(error);
  }
};

export const getMessages: Controller = async(req, res, next) => {
  try {
    const { chatId, user, isNeededToReadMessages } = req.query;

    if (!chatId || chatId === 'undefined') {
      throw new Error();
    }

    if (isNeededToReadMessages) {
      await messageHelper.readMessages(user, chatId);
    }

    res.json(await messageHelper.getAll(chatId));
  } catch (error) {
    next(error);
  }
};
