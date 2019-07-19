import { Dialogue, User } from '../schemas';
import { DialogueModel } from '../../models';


const create = (data: DialogueModel | any) => Dialogue.create(data);

const getAll = async (userId: string) => await Dialogue
  .find({ $or: [{ "Between.From": userId }, {"Between.To": userId}] })
  .populate({path: 'Between.From', model: User})
  .populate({path: 'Between.To', model: User});

  
export default {
  create,
  getAll
};
