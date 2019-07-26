import * as autoIncrement from 'mongoose-auto-increment';

import mongoose from '../../context';
import { MessageModel } from '../../models/message';


const Schema = mongoose.Schema;

const messageSchema = new Schema({
  Dialogue: {
    type: Schema.Types.ObjectId,
    ref: 'dialogue'
  },
  Text: {
    type: String,
    required: [true, 'Message text is required']
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  Time: {
    type: Number,
    required:  [true, 'Message time is required']
  },
  MessageId: Number
}, { versionKey: false });

messageSchema.plugin(autoIncrement.plugin, { model: 'message', field: 'MessageId', startAt: 1 });

export default mongoose.model<MessageModel>('message', messageSchema);
