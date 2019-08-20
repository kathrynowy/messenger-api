import * as bcrypt from 'bcryptjs';
import * as autoIncrement from 'mongoose-auto-increment';

import mongoose from '../../context';
import { UserModel } from '../../models/user';


const Schema = mongoose.Schema;

const userSchema = new Schema({
  chats: [{
    type: Schema.Types.ObjectId,
    ref: 'chat'
  }],
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  userId: Number
}, { versionKey: false });

userSchema.plugin(autoIncrement.plugin, { model: 'user', field: 'userId', startAt: 1 });

userSchema.methods.validPassword = function (password: string) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model<UserModel>('user', userSchema);
