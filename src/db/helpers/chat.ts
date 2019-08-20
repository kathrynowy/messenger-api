import { ChatModel } from '../../models';
import { Chat, User } from '../schemas';


const create = (data: ChatModel) => Chat.create(data);

const getAll = async(userId: string) => await Chat
  .find({ $or: [{ 'participants.from': userId }, {'participants.to': userId}] })
  .populate({path: 'participants.from', model: User})
  .populate({path: 'participants.to', model: User});


export default {
  create,
  getAll
};
