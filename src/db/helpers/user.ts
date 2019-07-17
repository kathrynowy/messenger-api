import { User } from '../schemas';
import { UserModel } from '../../models';

const create = (data: UserModel | any) => User.create(data);

const getAll = () => User.find({});

export default {
  create,
  getAll
};
