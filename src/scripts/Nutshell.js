import { MessageForm } from "./messages/MessageForm.js";
import { MessageList } from "./messages/MessageList.js";
import { MessageModal } from "./messages/MessageModal.js";
import "./messages/MessageEdit.js";
import { loadEvents } from "./events/EventList.js";
import { TaskForm } from "./tasks/TaskForm.js";
import { FriendsList } from "./friends/FirendList.js";
import { FriendForm } from "./friends/FriendForm.js";
import { FriendModal } from "./friends/FriendModal.js";
import { LogOut } from "./auth/LogOut.js";
export const Nutshell = () => {
  // Render all your UI components here
  MessageForm();
  MessageList();
  MessageModal();
  loadEvents();
  TaskForm();
  FriendsList();
  FriendForm();
  FriendModal();
  LogOut();
};
