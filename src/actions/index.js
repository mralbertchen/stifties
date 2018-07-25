export const createMessage = message => ({
  type: "CREATE_MESSAGE",
  payload: message
});

export const updateMessage = message => ({
  type: "UPDATE_MESSAGE",
  payload: message
});

export const deleteMessage = message => ({
  type: "DELETE_MESSAGE",
  payload: message
});
