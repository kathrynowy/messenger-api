import * as autoIncrement from 'mongoose-auto-increment';

import mongoose from '../../context';
import { ChatModel } from '../../models/chat';


const Schema = mongoose.Schema;

const chatSchema = new Schema({
  participants: {
    type: {
      _id: false,
      from: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      to: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    },
    required: [true, 'Participants are required']
  },
  chatId: Number
}, { versionKey: false });

chatSchema.plugin(autoIncrement.plugin, { model: 'chat', field: 'chatId', startAt: 1 });


export default mongoose.model<ChatModel>('chat', chatSchema);
