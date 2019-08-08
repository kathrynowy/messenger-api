export const addUserId = (users: any[], socket, userId: string) => {
  users.push({
    id : socket.id,
    userId
  });
};
