import * as autoIncrement from 'mongoose-auto-increment';

import mongoose from '../../context';
import { UserModel } from '../../models/user';


const Schema = mongoose.Schema;

const userSchema = new Schema({
  Dialogues: [{
    type: Schema.Types.ObjectId,
    ref: 'dialogue'
  }],
  Username: {
    type: String,
    required: [true, 'Username is required']
  },
  UserId: Number
}, { versionKey: false });

userSchema.plugin(autoIncrement.plugin, { model: 'user', field: 'UserId', startAt: 1 });


export default mongoose.model<UserModel>('user', userSchema);
