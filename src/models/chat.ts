import mongoose from '../context';
import { Participants } from './participants';


export interface ChatModel extends mongoose.Document {
  chatId: number;
  participants: Participants;
  lastMessageText: string;
  lastMessageTime: string;
}
