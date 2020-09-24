export const useMessages = () => messagesArray.slice();
let messagesArray = [];

export const getMessages = () => {
  return fetch(` http://localhost:8088/messages`)
    .then((response) => response.json())
    .then((parsedMessages) => {
      messagesArray = parsedMessages;
    });
};
