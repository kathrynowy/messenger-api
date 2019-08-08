export const sendMessage = (socket: any, messageData: any, users: any[]) => {
  const toUserSocketId = users.find((user) => user.userId === messageData.toUserId);
  if (toUserSocketId && toUserSocketId.id) {
    socket.broadcast.to(toUserSocketId.id).emit('RECEIVE_MESSAGE', messageData.message);
  }
};
