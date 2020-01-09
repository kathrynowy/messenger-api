import { chatHelper, messageHelper } from '../db/helpers';
import { Controller } from '../types/controller';
import { ApiChatResponse } from './../models/chat-response';


export const addChat: Controller = async(req, res, next) => {
  try {
    const { usersId } = req.body;
    const newChat = {
      participants: {
        to: usersId[0],
        from: usersId[1]
      }
    };

    res.json(await chatHelper.create(newChat));
  } catch (error) {
    next(error);
  }
};

export const getChats: Controller = async(req, res, next) => {
  try {
    const { userId } = req.query;
    const chats = await chatHelper.getAll(userId);
    const response = [];

    for (const chat of chats) {
      const unread = await messageHelper.getUnreadMessages(chat._id, userId);

      response.push(new ApiChatResponse(unread.length, chat));
    }

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const getChatById: Controller = async(req, res, next) => {
  try {
    const { params: { chatId } } = req;

    const chat = await chatHelper.getById(chatId);
    res.json(chat);
  } catch (error) {
    next(error);
  }
};
