import mongoose from '../context';
import { MessageModel } from './message';
import { Participants } from './participants';


export interface ChatModel extends mongoose.Document {
  chat: number;
  participants: Participants;
  lastMessage: MessageModel;
}
