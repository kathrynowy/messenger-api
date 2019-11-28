import { MessageModel } from '../../models';
import { Message } from '../schemas';


const create = (data: MessageModel) => Message.create(data);

const createAll = (data: MessageModel) => Message.insertMany(data);

const getAll = (chat: number) => Message.find({ chat });

const changeStatus = (messageId: string) => Message.findByIdAndUpdate(messageId, { isRead: true });

const readMessages = (user: string, chat: string) => Message
  .find({ user: { $ne: user}, chat })
  .update({ isRead: true });

export default {
  create,
  createAll,
  changeStatus,
  getAll,
  readMessages
};
