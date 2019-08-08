import mongoose from '../context';
import { BetweenUsers } from './betweenUsers';


export interface DialogueModel extends mongoose.Document {
  DialogueId: number;
  Between: BetweenUsers;
}
