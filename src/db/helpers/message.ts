import { MessageModel } from '../../models';
import { Message } from '../schemas';


const create = (data: MessageModel) => Message.create(data);

const createAll = (data: MessageModel) => Message.insertMany(data);

const getAll = (chat: string) => Message.find({ chat });

const changeStatus = (messageId: string) => Message.findByIdAndUpdate(messageId, { isRead: true });

const readMessages = (user: string, chat: string) =>
  Message.updateMany({ user: { $ne: user }, chat, isRead: false }, {$set: { isRead: true }});

const getUnreadMessages = (chat: string, user: string) => Message.find({ chat, user: { $ne: user}, isRead: false });


export default {
  create,
  createAll,
  changeStatus,
  getAll,
  getUnreadMessages,
  readMessages
};
