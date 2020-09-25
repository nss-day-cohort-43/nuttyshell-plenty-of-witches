let messagesArray = [];
let usersArray = [];
const eventHub = document.querySelector(".container");

export const useMessages = () => messagesArray.slice();
export const useUsers = () => usersArray.slice();

const dispatchStateChangeEvent = () => {
  const messageStateChangedEvent = new CustomEvent("messageStateChanged");
  eventHub.dispatchEvent(messageStateChangedEvent);
};

export const getMessages = () => {
  return fetch("http://localhost:8088/messages?_expand=user")
    .then((response) => response.json())
    .then((parsedMessages) => {
      messagesArray = parsedMessages;
    });
};

export const getUsers = () => {
  return fetch("http://localhost:8088/users")
    .then((response) => response.json())
    .then((parsedUsers) => {
      usersArray = parsedUsers;
    });
};

export const saveMessage = (message) => {
  return fetch("http://localhost:8088/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then(getMessages)
    .then(dispatchStateChangeEvent);
};

export const deleteMessage = (messageId) => {
  return fetch(`http://localhost:8088/messages/${messageId}`, {
    method: "DELETE",
  })
    .then(getMessages)
    .then(dispatchStateChangeEvent);
};
