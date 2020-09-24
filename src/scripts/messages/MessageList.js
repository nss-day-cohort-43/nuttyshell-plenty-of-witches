import { getMessages, useMessages } from "./MessageProvider.js";
let messageArray = [];

export const MessageList = () => {
  getMessages().then(() => {
    messageArray = useMessages();
    render();
  });
};

const render = () => {
  console.log(useMessages());
};
