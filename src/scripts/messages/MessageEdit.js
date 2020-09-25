const eventHub = document.querySelector(".container");
import { getSingleMessage, updateMessage } from "./MessageProvider.js";
import { directMessage } from "./MessageModal.js";
let editedObj = {};

eventHub.addEventListener("editMessageSelected", (event) => {
  const modal = document.querySelector(".modal");
  document.getElementById(
    "modalButtonArea"
  ).innerHTML = `<button id="editMessageBtn">Update Post</button>`;
  //open modal
  modal.style.display = "block";
  const messageId = event.detail.messageId;

  getSingleMessage(messageId).then((responseObj) => {
    editedObj = { ...responseObj };
    document.getElementById("message-textarea").value = responseObj.message;
  });
});
