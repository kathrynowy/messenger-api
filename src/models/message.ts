import mongoose from '../context';
import { UserModel, DialogueModel } from '.';


export interface MessageModel extends mongoose.Document {
  Dialogue: DialogueModel;
  Text: string;
  User: UserModel;
  Time: number;
  MessageId: number;
}
