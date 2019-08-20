import { UserModel } from '../../models';
import { User } from '../schemas';


const create = (data: UserModel | any) => User.create(data);

const getAll = () => User.find({});

const checkUserExistence = (username: string) => User.find({ username });

const getById = (id: string) => User.findById(id);

export default {
  create,
  checkUserExistence,
  getAll,
  getById
};
