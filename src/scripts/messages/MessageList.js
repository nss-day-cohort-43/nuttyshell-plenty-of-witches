import { MessageHTML } from "./MessageHTML.js";
import { getMessages, useMessages } from "./MessageProvider.js";

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
};
