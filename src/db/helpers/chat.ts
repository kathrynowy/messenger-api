import { ChatModel, MessageModel } from '../../models';
import { Chat, Message, User } from '../schemas';


const create = (data: ChatModel | object) => Chat.create(data);

const getAll = async(userId: string) => await Chat
  .find({ $or: [{ 'participants.from': userId }, {'participants.to': userId}] })
  .populate({path: 'participants.from', model: User})
  .populate({path: 'participants.to', model: User});

const updateLastMessage = async(message: MessageModel) => await Chat
  .findByIdAndUpdate(message.chat._id, { lastMessageText: message.text, lastMessageTime: message.time }, { new: true });

const getById = (id: string) => Chat.findById(id)
  .populate({path: 'participants.from', model: User})
  .populate({path: 'participants.to', model: User});


export default {
  create,
  getAll,
  getById,
  updateLastMessage
};
