import { MessageForm } from "./messages/MessageForm.js";
import { MessageList } from "./messages/MessageList.js";
import { MessageModal } from "./messages/MessageModal.js";
import { FriendsList } from "./friends/FirendList.js";
import { FriendForm } from "./friends/FriendForm.js";
import "./messages/MessageEdit.js";
export const Nutshell = () => {
  // Render all your UI components here
  MessageForm();
  MessageList();
  MessageModal();
  FriendForm();
  FriendsList();
};
