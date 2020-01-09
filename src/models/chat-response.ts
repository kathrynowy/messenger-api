
import { ChatModel } from './chat';
import { Participants } from './participants';


export class ApiChatResponse {
  unreadMessages: number = 0;
  chat: number;
  participants: Participants;
  lastMessageText: string;
  lastMessageTime: string;
  chatId: number;
  _id: string;

  constructor(unreadMessages: number, chat: ChatModel) {
    this._id = chat._id;
    this.participants = chat.participants;
    this.lastMessageText = chat.lastMessageText;
    this.lastMessageTime = chat.lastMessageTime;
    this.unreadMessages = unreadMessages;
    this.chatId = chat.chatId;
  }
}
