import { DialogueModel, UserModel } from '.';
import mongoose from '../context';


export interface MessageModel extends mongoose.Document {
  Dialogue: DialogueModel;
  Text: string;
  User: UserModel;
  Time: number;
  MessageId: number;
}
