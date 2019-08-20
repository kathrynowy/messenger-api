import { MessageModel } from '../../models';
import { Message } from '../schemas';


const create = (data: MessageModel) => Message.create(data);

const createAll = (data: MessageModel) => Message.insertMany(data);

const getAll = (chat: number) => Message.find({ chat });


export default {
  create,
  createAll,
  getAll
};
