export interface ChatMessage{
  chatId? : string,
  message : string,
  createdOn : Date,
  receiverId : string,
  receiverName : string,
  senderId : string,
  senderName : string

}

//we use here chatId? because it is optional