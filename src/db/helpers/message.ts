import { Message } from '../schemas';
import { MessageModel } from '../../models';

const create = (data: MessageModel | any) => Message.create(data);

const createAll = (data: MessageModel) => Message.insertMany(data);

const getByUserId = (UserId: number) => Message.find({ User: UserId });

export default {
  create,
  createAll,
  getByUserId
};
