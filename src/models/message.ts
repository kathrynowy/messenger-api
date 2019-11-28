import { ChatModel, UserModel } from '.';
import mongoose from '../context';


export interface MessageModel extends mongoose.Document {
  chat: ChatModel;
  text: string;
  user: UserModel;
  time: number;
  messageId: number;
  isRead: boolean;
  isDeleted: boolean;
}
