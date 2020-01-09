export const addUserId = (users: any[], socket, userId: string) => {
  const currentUser = users.find(user => user.userId === userId);

  currentUser
    ? currentUser.id = socket.id
    : users.push({ id: socket.id, userId });
};
