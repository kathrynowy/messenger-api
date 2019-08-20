import * as autoIncrement from 'mongoose-auto-increment';

import mongoose from '../../context';
import { MessageModel } from '../../models/message';


const Schema = mongoose.Schema;

const messageSchema = new Schema({
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'chat'
  },
  text: {
    type: String,
    required: [true, 'Message text is required']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  time: {
    type: Number,
    required:  [true, 'Message time is required']
  },
  messageId: Number
}, { versionKey: false });

messageSchema.plugin(autoIncrement.plugin, { model: 'message', field: 'messageId', startAt: 1 });


export default mongoose.model<MessageModel>('message', messageSchema);
