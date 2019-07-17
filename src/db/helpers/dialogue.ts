import { Dialogue } from '../schemas';
import { DialogueModel } from '../../models';

const create = (data: DialogueModel | any) => Dialogue.create(data);

const getAll = () => Dialogue.find({});

export default {
  create,
  getAll
};
