import { Message } from '../schemas';
import { MessageModel } from '../../models';

const create = (data: MessageModel | any) => Message.create(data);

const createAll = (data: MessageModel) => Message.insertMany(data);

const getAll = (dialogueId: number) => Message.find({ Dialogue: dialogueId });

export default {
  create,
  createAll,
  getAll
};
