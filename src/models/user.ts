import mongoose from '../context';
import { ChatModel } from './chat';


export interface UserModel extends mongoose.Document {
  chats: ChatModel[];
  username: string;
  userId: number;
  password: string;
  validPassword(password: string): any;
}
