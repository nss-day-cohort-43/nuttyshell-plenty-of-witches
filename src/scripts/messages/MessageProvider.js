export const useMessages = () => messagesArray.slice();
let messagesArray = [];

export const getMessages = () => {
  return fetch(`http://localhost:8088/messages?_expand=user`)
    .then((response) => response.json())
    .then((parsedMessages) => {
      messagesArray = parsedMessages;
    });
};

let usersArray = [];
export const useUsers = () => usersArray.slice();

export const getUsers = () => {
  return fetch(`http://localhost:8088/users`)
    .then((response) => response.json())
    .then((parsedUsers) => {
      usersArray = parsedUsers;
    });
};
