import mongoose from '../context';
import { DialogueModel } from './dialogue';
import { UserModel } from './user';


export interface MessageModel extends mongoose.Document {
  Dialogue: DialogueModel;
  Text: string;
  User: UserModel;
  Time: number;
  MessageId: number;
}