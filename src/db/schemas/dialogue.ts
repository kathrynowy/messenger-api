import * as autoIncrement from 'mongoose-auto-increment';

import mongoose from '../../context';
import { DialogueModel } from '../../models/dialogue';


const Schema = mongoose.Schema;

const dialogueSchema = new Schema({
  Between: {
    type: {
      _id: false,
      From: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      To: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    },
    required: [true, 'Between users are required']
  },
  DialogueId: Number
}, { versionKey: false });

dialogueSchema.plugin(autoIncrement.plugin, { model: 'dialogue', field: 'DialogueId', startAt: 1 });

export default mongoose.model<DialogueModel>('dialogue', dialogueSchema);
