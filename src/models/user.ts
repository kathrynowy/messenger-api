import mongoose from '../context';
import { DialogueModel } from './dialogue';


export interface UserModel extends mongoose.Document {
  Dialogues: DialogueModel[];
  Username: string;
  UserId: number;
}
