import { UserModel } from '../../models';
import { User } from '../schemas';


const create = (data: UserModel | any) => User.create(data);

const getAll = () => User.find({});


export default {
  create,
  getAll
};
