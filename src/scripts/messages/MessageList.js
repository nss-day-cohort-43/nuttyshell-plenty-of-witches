//render messages history inside message feed/chat
import { MessageHTML } from "./MessageHTML.js";
import {
  getMessages,
  useMessages,
  saveMessage,
  deleteMessage,
} from "./MessageProvider.js";
const eventHub = document.querySelector(".container");

let messageArray = [];

export const MessageList = () => {
  getMessages().then(() => {
    messageArray = useMessages();
    render();
  });
};

const render = () => {
  const contentTarget = document.getElementById("messageHistory");
  contentTarget.innerHTML = `
  ${messageArray.map((message) => `${MessageHTML(message)}`).join("")}
  `;
  contentTarget.scrollTop = contentTarget.scrollHeight;
};

//add message to list
eventHub.addEventListener("postEntered", (event) => {
  const newMessageObj = {
    userId: event.detail.userId,
    message: event.detail.message,
    recipientId: event.detail.recipientId,
    date: event.detail.date,
  };
  saveMessage(newMessageObj);
});

//delete message from list
eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("deleteMessageBtn--")) {
    const [prefix, messageId] = event.target.id.split("--");
    if (confirm("Are you sure you want to delete this post")) {
      deleteMessage(messageId);
    }
  }
});
