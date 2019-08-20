import mongoose from '../context';
import { Participants } from './participants';


export interface ChatModel extends mongoose.Document {
  chat: number;
  participants: Participants;
}
